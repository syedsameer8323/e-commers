# ShopAi: AI E-Commerce Platform, Auth Foundation

React (Vite) -> Django REST Framework -> PostgreSQL, with JWT auth and role-based access.

## Backend
```bash
cd backend
python -m venv venv && source venv/bin/activate      # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env                                   # then edit values
# create the database first:  createdb ecom_db   (or use pgAdmin)
python manage.py makemigrations users
python manage.py migrate
python manage.py create_admin                          # prompts for name/email/password
python manage.py test                                  # 9 tests
python manage.py runserver                             # http://localhost:8000
```
Generate secrets: `python -c "import secrets;print(secrets.token_urlsafe(50))"`

## Frontend
```bash
cd frontend
cp .env.example .env
npm install
npm run dev                                            # http://localhost:5173
```

## API
| Method | Path | Auth | Notes |
|---|---|---|---|
| POST | /api/auth/register/ | no | customer/seller only; `admin` -> 400 |
| POST | /api/auth/login/ | no | returns access + refresh + user; 401 on bad credentials |
| POST | /api/auth/refresh/ | no | rotates refresh token |
| GET | /api/auth/me/ | Bearer | current user |
| POST | /api/auth/logout/ | Bearer | blacklists the refresh token |
| POST | /api/auth/forgot-password/ | no | DEV ONLY: link printed in server console |
| POST | /api/auth/reset-password/ | no | uid + token + new password |

Status codes: 400 validation, 401 bad credentials/token, 409 duplicate email, 429 throttled.

## Decisions
- **Registration does not auto-login** (Option B). It keeps the door open for email verification
  and avoids issuing tokens to unverified accounts. Flow: register -> /login with a success banner.
- **Logout** blacklists the refresh token server-side (simplejwt blacklist app); access tokens live 15 min.
- **Tokens in localStorage/sessionStorage** (dev). "Remember me" picks which. XSS could read them; for
  production move the refresh token to an HttpOnly cookie. All storage access lives in `services/api.js`.
- **Admins** can only be created via `create_admin` or `createsuperuser`; the register serializer rejects the role.

## Frontend routes
`/` landing, `/login`, `/register`, `/forgot-password`, `/reset-password`,
`/dashboard` (customer), `/seller`, `/admin`. Role mismatches redirect to the user's own dashboard.

## Future modules
Add apps (`products`, `cart`, ...) and FK to `settings.AUTH_USER_MODEL`. Protect views with
`users.permissions.IsSeller / IsCustomer / IsAdminRole / IsSellerOrAdmin`.

## Known limitations
Email delivery is console-only; no email verification; throttling uses the default per-process cache
(use Redis in production); Terms/Privacy links are placeholders; landing products are static previews.
