from django.urls import path, include
from rest_framework import routers
from .views import CategoriesViewSet, RecipesViewSet, UserViewSet, GroupViewSet

router = routers.SimpleRouter()

router.register(r'category', CategoriesViewSet)
router.register(r'recipe', RecipesViewSet)
router.register(r'user', UserViewSet)

urlpatterns = [
    path('/', include(router.urls)),
]
