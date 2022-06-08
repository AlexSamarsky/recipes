from django.urls import path, include
from rest_framework import routers
from .views import CategoryViewSet, UserViewSet, RecipesViewSet, RecipesHyperlinkedListViewSet

router = routers.SimpleRouter()

router.register(r'category', CategoryViewSet,
                basename='category')
router.register(r'recipe/list', RecipesHyperlinkedListViewSet,
                basename='recipe-list')
router.register(r'recipe', RecipesViewSet, basename='recipe')
router.register(r'user', UserViewSet)

urlpatterns = [
    path('v1/', include(router.urls)),
]
