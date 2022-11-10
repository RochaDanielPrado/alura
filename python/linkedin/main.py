from linkedin.linkedin import (LinkedInAuthentication, LinkedInApplication, PERMISSIONS)

if __name__ == '__main__':
    API_KEY = '77dwgf8iap21oc'
    API_SECRET = 'Ei7l9MkQsVZkoowO'
    RETURN_URL = 'http://localhost:8000'

    authentication = LinkedInAuthentication(API_KEY, API_SECRET, RETURN_URL,
                                                PERMISSIONS.enums.values())
    print(authentication.authorization_url)
    application = LinkedInApplication(authentication)
