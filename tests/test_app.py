import unittest

from app import app


class AppRoutesTest(unittest.TestCase):
    def setUp(self):
        self.client = app.test_client()

    def test_home_page(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'NRIIT', response.data)

    def test_about_page(self):
        response = self.client.get('/about')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'About NRIIT', response.data)

    def test_courses_page(self):
        response = self.client.get('/courses')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Courses Offered', response.data)

    def test_register_page(self):
        response = self.client.get('/register')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Student Registration', response.data)


if __name__ == '__main__':
    unittest.main()
