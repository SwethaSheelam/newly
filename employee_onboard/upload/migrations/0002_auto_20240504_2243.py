# Generated by Django 3.2 on 2024-05-04 17:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('upload', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='document',
            name='document_file',
        ),
        migrations.RemoveField(
            model_name='document',
            name='document_type',
        ),
    ]
