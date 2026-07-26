# Chitti API Design

## Overview

The Chitti API provides secure access to all platform functionality.

The API is designed for:

- Web applications
- Mobile applications
- Third-party integrations
- Future developer ecosystem

---

# API Principles

Chitti APIs follow:

- REST architecture
- JSON communication
- Secure authentication
- Versioned endpoints
- Clear error responses
- Comprehensive documentation

---

# Base URL

Development:

```
https://api-dev.chitti.app
```

Production:

```
https://api.chitti.app
```

API Version:

```
/api/v1
```

Example:

```
GET /api/v1/members
```

---

# Authentication

Chitti uses secure token-based authentication.

## Login

```
POST /api/v1/auth/login
```

Request:

```json
{
  "email": "user@example.com",
  "password": "password"
}
```

Response:

```json
{
  "accessToken": "token",
  "refreshToken": "token",
  "user": {
    "id": "123",
    "name": "User",
    "role": "admin"
  }
}
```

---

# Users

## Get Current User

```
GET /api/v1/users/me
```

Returns:

- Profile information
- Permissions
- Organization details

---

# Organizations

## Create Organization

```
POST /api/v1/organizations
```

Request:

```json
{
  "name": "ABC Chits",
  "phone": "+91XXXXXXXXXX"
}
```

---

## Get Organization

```
GET /api/v1/organizations/{id}
```

---

# Members

## Create Member

```
POST /api/v1/members
```

Request:

```json
{
  "name": "Ravi Kumar",
  "phone": "+91XXXXXXXXXX",
  "email": "ravi@example.com"
}
```

---

## List Members

```
GET /api/v1/members
```

Supports:

- Search
- Filtering
- Pagination

Example:

```
GET /api/v1/members?page=1&limit=20
```

---

# Chit Groups

## Create Chit Group

```
POST /api/v1/chit-groups
```

Request:

```json
{
  "name": "Gold Savings Group",
  "totalAmount": 1000000,
  "duration": 20,
  "memberCount": 20
}
```

---

## Get Chit Groups

```
GET /api/v1/chit-groups
```

---

# Installments

## Record Payment

```
POST /api/v1/installments/{id}/payment
```

Request:

```json
{
  "amount": 50000,
  "method": "UPI",
  "reference": "TXN123456"
}
```

---

## Payment History

```
GET /api/v1/payments
```

---

# Auctions

## Create Auction

```
POST /api/v1/auctions
```

Request:

```json
{
  "chitGroupId": "123",
  "date": "2026-01-01"
}
```

---

## Live Auction

WebSocket:

```
ws://api.chitti.app/auction/{auctionId}
```

Events:

```
auction.started

bid.created

auction.completed
```

---

# Bids

## Submit Bid

```
POST /api/v1/bids
```

Request:

```json
{
  "auctionId": "123",
  "amount": 250000
}
```

---

# Reports

## Financial Summary

```
GET /api/v1/reports/financial-summary
```

Returns:

- Total collection
- Pending payments
- Revenue
- Outstanding amounts

---

# Notifications

## Send Notification

```
POST /api/v1/notifications/send
```

Supports:

- SMS
- WhatsApp
- Email
- Push notifications

---

# Error Handling

All errors follow a standard format:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid member details"
  }
}
```

---

# Security

API security includes:

- Authentication tokens
- Permission checks
- Rate limiting
- Request validation
- Audit logging
- Secure transport

---

# Future API Capabilities

Planned:

- Public developer API
- SDKs
- Webhooks
- Partner integrations
- Payment gateway integrations
- Analytics API

---

# API Philosophy

The Chitti API should be:

- Simple for developers
- Secure for financial data
- Reliable at scale
- Easy to extend
  
