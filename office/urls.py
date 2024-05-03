
from employee import views



from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'users', UserViewSet)

# The API URLs are now determined automatically by the router.
urlpatterns = [
     path('',views.home,name="home"),
    path('', include(router.urls)),
]