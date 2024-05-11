from rest_framework import viewsets
from .models import Onboarding, NewEmployee, Contract, OnboardingTasks
from .serializers import OnboardingSerializer, NewEmployeeSerializer, ContractSerializer, OnboardingTasksSerializer

class OnboardingViewSet(viewsets.ModelViewSet):
    queryset = Onboarding.objects.all()
    serializer_class = OnboardingSerializer

class NewEmployeeViewSet(viewsets.ModelViewSet):
    queryset = NewEmployee.objects.all()
    serializer_class = NewEmployeeSerializer

class ContractViewSet(viewsets.ModelViewSet):
    queryset = Contract.objects.all()
    serializer_class = ContractSerializer

class OnboardingTasksViewSet(viewsets.ModelViewSet):
    queryset = OnboardingTasks.objects.all()
    serializer_class = OnboardingTasksSerializer
