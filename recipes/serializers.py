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


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class RecipeSerializer(serializers.HyperlinkedModelSerializer):
    category = CategorySerializer

    class Meta:
        model = Recipe
        fields = ['id', 'name', 'category', 'description']
