from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import OnboardingViewSet, NewEmployeeViewSet, ContractViewSet, OnboardingTasksViewSet

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'onboarding', OnboardingViewSet)
router.register(r'newemployee', NewEmployeeViewSet)
router.register(r'contract', ContractViewSet)
router.register(r'onboardingtasks', OnboardingTasksViewSet)

# The API URLs are now determined automatically by the router.
# Additionally, we include the login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
