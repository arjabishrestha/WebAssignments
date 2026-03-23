from django.shortcuts import render
from .models import Student

def home(request):
    name = "Home page"
    return render(request,'home.html',{"name":name})

def book_list(request):
    data = {
        'books':['Python','Django','HTML','CSS']
    }
    return render(request,'books.html',data)

def student_list_view(request):
    students=Student.objects.all()
    data={
        'students':students
    }
    return render(request,'studentdata.html',data)