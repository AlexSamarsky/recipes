from django.contrib import admin

# Register your models here.
from .models import Category, Recipe
# Register your models here.

admin.site.register(Recipe)
admin.site.register(Category)
