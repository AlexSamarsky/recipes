from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Category, Recipe


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class CategoryHyperlinkedSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='category-detail',
        lookup_field='pk'
    )

    class Meta:
        model = Category
        fields = ('url', 'id', 'name')


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ['id', 'name', 'category', 'description']


class RecipeHyperlinkedSerializer(serializers.HyperlinkedModelSerializer):

    category = CategoryHyperlinkedSerializer()
    url = serializers.HyperlinkedIdentityField(
        view_name='recipe-list-detail',
        lookup_field='pk'
    )
    # category_name = serializers.CharField(source='category.name')

    class Meta:
        model = Recipe
        fields = ['id', 'name', 'category', 'description', 'url']
