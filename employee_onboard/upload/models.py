from django.db import models

from django.contrib.auth import get_user_model

User = get_user_model()



# Create your models here.
class Document(models.Model):
    DOCUMENT_TYPES = (
        ('Aadhar', 'Aadhar Card'),
        ('Pan', 'Pan Card'),
        ('Passport', 'Passport'),
        # Add more choices as needed
    )

    employee = models.ForeignKey(User, on_delete=models.CASCADE)
    proof = models.CharField(max_length=100, choices=DOCUMENT_TYPES, default='Aadhar')
    proof_file = models.FileField(upload_to='documents/', null=True)
    resume = models.FileField(upload_to='documents/')

    def __str__(self):
        return f"Document for {self.employee.username}"

