from django.shortcuts import render
import datetime

# Create your views here.

def home(request):
    dict = {
    }
    return render(request, 'index.html', dict)