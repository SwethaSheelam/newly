# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('documents/', views.document_list, name='document-list'),
]
