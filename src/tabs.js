"use strict";

(function (){
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.tabs__btn').forEach(function(tabsLink) {
      tabsLink.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path

        document.querySelectorAll('.tabs__section').forEach(function(tabSection) {
          tabSection.classList.remove('tabs__section--active')
        });
        document.querySelector(`[data-target='${path}']`).classList.add('tabs__section--active');
      })
    })
  })
})()


Выполните загрузку и установку приложения.
 
После установки приложения необходимо выполнить следующие действия:
1. Открыть приложение. 
2. Выбрать пункт 'Сканировать QR-код'
3. Отсканировать QR код в приложении 
 .
После сканирования появится учетная запись Ingosstrakh, для которой будут генерироваться временные коды. 
 
Примечание:
Время жизни одноразового пароля - 30 секунд.
 
При использовании приложения Microsoft Authentificator мобильное устройство должно быть подключено к сети Интернет.
 
Checkpoint Endpoint VPN
 
Программное обеспечение Checkpoint Endpoint VPN вы можете скачать по ссылке Endpoint VPN 
(Если данное приложение уже установлено в системе, повторная установка не требуется)
 
После завершения установки ПО Checkpoint Endpoint VPN необходимо выполнить настройку VPN клиента:
1. Открыть ПО и нажать кнопку 'Создать (Create)'.
2. Ввести 'mlogin.ingos.ru' в поле 'Server' и нажать кнопку 'Next'.
3. В окне 'Login Option Selection' выбрать метод 'certificate_TOTP'
4. При завершении настройки подключения появится предложение 'Would you like to connect', необходимо нажать кнопку 'YES'
5. В окне авторизации нажать на гиперссылку 'Click here if don’t have a certificate for this site' 
6. Далее необходимо выбрать 'Microsoft Base Cryptographic Provider v1.0' и ввести ключ регистрации 74089-wfuajy в поле 'Registration Key'. 

Примачение: ключ регистрации действителен в течение 14 дней с момента получения письма. Ключ регистрации можно ввести только один раз. Если при вводе ключа регистрации возникли ошибки, то необходимо обратиться к администраторам безопасности СПАО 'Ингосстрах'
 
7. Нажать кнопку 'Enroll', чтобы импортировать сертификата пользователя.
 
После завершения процесса импортирования сертификата в окне авторизации появится возможность выбора сертификата. 
 
8. Чтобы подключиться к шлюзу удаленных пользователей, нужно выбрать именной сертификат и нажать кнопку 'connect'. 
 
9. Далее появится окно ввода одноразового пароля, в поле 'response' необходимо ввести код из приложения Microsoft Authentificator и нажать кнопку 'connect'.


