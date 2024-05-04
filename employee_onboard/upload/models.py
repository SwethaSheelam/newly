from django.db import models

from django.contrib.auth import get_user_model

User = get_user_model()



# Create your models here.
class Document(models.Model):
    employee = models.ForeignKey(User, on_delete=models.CASCADE)
    #document_type = models.CharField(max_length=100)
   # document_file = models.FileField(upload_to='documents')

