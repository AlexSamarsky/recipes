from django.contrib.auth.models import User, Group
from rest_framework import viewsets, permissions, pagination, response, mixins, status
from django_filters import FilterSet, NumberFilter
from django_filters.rest_framework import DjangoFilterBackend
from django.shortcuts import get_object_or_404

from .serializers import CategoryHyperlinkedSerializer, CategorySerializer, UserSerializer, GroupSerializer
from .serializers import RecipeHyperlinkedSerializer, RecipeSerializer
from .models import Category, Recipe


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAdminUser]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAdminUser]


class CategoryHyperlinkedListViewSet(mixins.ListModelMixin, mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = Category.objects.all().order_by('name')
    serializer_class = CategoryHyperlinkedSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all().order_by('name')
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class RecipeFilter(FilterSet):
    category = NumberFilter(field_name='category')

    class Meta:
        model = Recipe
        fields = ['category']


class RecipeSetPagination(pagination.PageNumberPagination):
    page_size = 2
    page_size_query_param = 'page_size'
    max_page_size = 1000

    def get_paginated_response(self, data):
        return response.Response({
            'count': self.page.paginator.count,
            'page_number': self.page.number,
            'num_pages': self.page.paginator.num_pages,
            'next': self.get_next_link(),
            'previous': self.get_previous_link(),
            'results': data
        })


class RecipesViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    filter_class = RecipeFilter
    filter_backends = [DjangoFilterBackend]
    pagination_class = RecipeSetPagination


class RecipesHyperlinkedListViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeHyperlinkedSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    filter_class = RecipeFilter
    filter_backends = [DjangoFilterBackend]
    pagination_class = RecipeSetPagination
