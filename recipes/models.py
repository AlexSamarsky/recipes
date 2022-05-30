from django.db import models

# Create your models here.


class Category(models.Model):
    ''' Категории
    '''
    name = models.CharField(max_length=150, unique=True,
                            verbose_name='Наименование')

    def __str__(self):
        str = f'{self.name}'
        return str


class Recipe(models.Model):
    ''' Рецепт
    '''

    name = models.CharField(max_length=150, verbose_name='Наименование')
    description = models.TextField()
    category = models.ForeignKey(
        Category, blank=False, on_delete=models.CASCADE, verbose_name='Категория')

    def __str__(self):
        str = f'{self.name}'
        return str
