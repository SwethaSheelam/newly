from rest_framework import serializers
from .models import Onboarding, NewEmployee, Contract, OnboardingTasks

class OnboardingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Onboarding
        fields = '__all__'

class NewEmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewEmployee
        fields = '__all__'

class ContractSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contract
        fields = '__all__'

class OnboardingTasksSerializer(serializers.ModelSerializer):
    class Meta:
        model = OnboardingTasks
        fields = '__all__'
