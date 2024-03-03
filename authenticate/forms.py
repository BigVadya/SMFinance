from django.contrib.auth.forms import UserCreationForm, UserChangeForm, PasswordChangeForm
from django.contrib.auth.models import User
from django import forms

class EditProfileForm(UserChangeForm):
	password = forms.CharField(label="",  widget=forms.TextInput(attrs={'type':'hidden'}))
	class Meta:
		model = User
		fields = ('username', 'first_name', 'last_name', 'email', 'password',)

	def __init__(self, *args, **kwargs):
	    super(EditProfileForm, self).__init__(*args, **kwargs)

	    self.fields['username'].widget.attrs['class'] = 'form-control'
	    self.fields['username'].widget.attrs['placeholder'] = 'Логин'
	    self.fields['username'].label = 'Логин'
	    self.fields['username'].help_text = '<span class="form-text text-muted"><small>Требуемый. Не более 150 символов. Только буквы, цифры и @/./+/-/_.</small></span>'

	    self.fields['first_name'].widget.attrs['class'] = 'form-control'
	    self.fields['first_name'].widget.attrs['placeholder'] = 'Имя'
	    self.fields['first_name'].label = 'Имя'

	    self.fields['last_name'].widget.attrs['class'] = 'form-control'
	    self.fields['last_name'].widget.attrs['placeholder'] = 'Фамилия'
	    self.fields['last_name'].label = 'Фамилия'

	    self.fields['email'].widget.attrs['class'] = 'form-control'
	    self.fields['email'].widget.attrs['placeholder'] = 'Адресс почты'
	    self.fields['email'].label = 'Адресс почты'






class CustomPasswordChangeForm(PasswordChangeForm):
	old_password = forms.CharField(label='Старый пароль', widget=forms.PasswordInput)
	new_password1 = forms.CharField(label='Новый пароль', widget=forms.PasswordInput)
	new_password2 = forms.CharField(label='Подтвердите новый пароль', widget=forms.PasswordInput)
	class Meta:
		model = User
		fields = ('old_password', 'new_password1', 'new_password2',)

	def __init__(self, *args, **kwargs):
		super(CustomPasswordChangeForm, self).__init__(*args, **kwargs)

		self.fields['old_password'].widget.attrs['class'] = 'form-control'
		self.fields['old_password'].widget.attrs['placeholder'] = 'Старый пароль'
		self.fields['old_password'].label = 'Старый пароль'

		self.fields['new_password1'].widget.attrs['class'] = 'form-control'
		self.fields['new_password1'].widget.attrs['placeholder'] = 'Новый пароль'
		self.fields['new_password1'].label = 'Новый пароль'

		self.fields['new_password2'].widget.attrs['class'] = 'form-control'
		self.fields['new_password2'].widget.attrs['placeholder'] = 'Подтвердите новый пароль'
		self.fields['new_password2'].label = 'Подтвердите новый пароль'


class SignUpForm(UserCreationForm):
	email = forms.EmailField(label="", widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Адресс почты'}), )
	first_name = forms.CharField(label="", max_length=100, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Имя'}))
	last_name = forms.CharField(label="", max_length=100, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Фамилия'}))
	
	
	class Meta:
		model = User
		fields = ('username', 'first_name', 'last_name', 'email', 'password1', 'password2',)

	def __init__(self, *args, **kwargs):
	    super(SignUpForm, self).__init__(*args, **kwargs)

	    self.fields['username'].widget.attrs['class'] = 'form-control'
	    self.fields['username'].widget.attrs['placeholder'] = 'Логин'
	    self.fields['username'].label = ''
	    self.fields['username'].help_text = '<span class="form-text text-muted"><small>Требуемый. Не более 150 символов. Только буквы, цифры и @/./+/-/_.</small></span>'

	    self.fields['password1'].widget.attrs['class'] = 'form-control'
	    self.fields['password1'].widget.attrs['placeholder'] = 'Пароль'
	    self.fields['password1'].label = ''
	    self.fields['password1'].help_text = '<ul class="form-text text-muted small"><li>Ваш пароль не должен быть слишком похож на другую вашу личную информацию.</li><li>Ваш пароль должен содержать не менее 8 символов.</li><li>Ваш пароль не может быть часто используемым паролем.</li><li>Ваш пароль не может быть полностью цифровым.</li></ul>'

	    self.fields['password2'].widget.attrs['class'] = 'form-control'
	    self.fields['password2'].widget.attrs['placeholder'] = 'Подтвердите пароль'
	    self.fields['password2'].label = ''
	    self.fields['password2'].help_text = '<span class="form-text text-muted"><small>Введите тот же пароль, что и раньше, для проверки.</small></span>'