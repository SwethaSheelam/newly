# Generated by Django 5.0.4 on 2024-05-07 16:04

import datetime
import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('tasks', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Onboarding',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('entry_date', models.DateField(default=datetime.date.today)),
                ('trial_period', models.IntegerField(default=12, help_text='Weeks')),
            ],
        ),
        migrations.CreateModel(
            name='NewEmployee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('birth_date', models.DateField()),
                ('personal_email', models.EmailField(max_length=254, null=True)),
                ('profile', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('onboarding', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='onboarding.onboarding')),
            ],
            options={
                'verbose_name_plural': 'New Employees',
            },
        ),
        migrations.CreateModel(
            name='Contract',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('contract_nr', models.IntegerField()),
                ('salary', models.DecimalField(decimal_places=2, help_text='€ Brutto pro Year', max_digits=8)),
                ('work_time', models.IntegerField(default=40, help_text='Hours pro week')),
                ('onboarding', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='onboarding.onboarding')),
            ],
        ),
        migrations.CreateModel(
            name='OnboardingTasks',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('position', models.PositiveIntegerField()),
                ('state', models.CharField(choices=[('CM', 'Completed'), ('ST', 'Open'), ('PR', 'Processed'), ('NC', 'Not necessary')], default='ST', max_length=2)),
                ('last_updated', models.DateTimeField(auto_now=True)),
                ('date_due', models.DateField(blank=True, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('assigned_to', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='assigned_tasks', to=settings.AUTH_USER_MODEL)),
                ('last_updated_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='last_updated_tasks', to=settings.AUTH_USER_MODEL)),
                ('onboarding', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='onboarding.onboarding')),
                ('task', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tasks.task')),
            ],
            options={
                'verbose_name_plural': 'Onboarding Tasks',
                'unique_together': {('onboarding', 'position'), ('task', 'onboarding')},
            },
        ),
        migrations.AddField(
            model_name='onboarding',
            name='tasks',
            field=models.ManyToManyField(through='onboarding.OnboardingTasks', to='tasks.task'),
        ),
    ]