# Chitti

<p align="center">
  <strong>The Digital Operating System for Chit Fund Organizations</strong>
</p>

<p align="center">
  A secure, scalable SaaS platform for managing chit groups, members, collections, auctions, payments, and financial operations.
</p>

<p align="center">

![GitHub stars](https://img.shields.io/github/stars/leolouis/Chitti?style=flat)
![GitHub forks](https://img.shields.io/github/forks/leolouis/Chitti?style=flat)
![GitHub issues](https://img.shields.io/github/issues/leolouis/Chitti)
![GitHub pull requests](https://img.shields.io/github/issues-pr/leolouis/Chitti)
![License](https://img.shields.io/github/license/leolouis/Chitti)
![Last Commit](https://img.shields.io/github/last-commit/leolouis/Chitti)

</p>

<p align="center">

🚀 Active Development  
🔒 Security Focused  
🌎 Open Source  

</p>

---

# Overview

Chitti is a modern financial operations platform built for chit fund organizations.

It transforms traditional manual workflows into a secure digital experience.

Organizations can manage:

- Members
- Chit groups
- Installments
- Payments
- Auctions
- Users
- Financial operations

Chitti is designed as a scalable foundation for the next generation of community-based financial platforms.

---

# Vision

## Building the operating system for chit fund businesses

Many financial organizations still depend on:

- Paper records
- Spreadsheets
- Manual calculations
- Phone-based coordination
- Disconnected tools

Chitti provides a unified technology platform that enables:

- Transparency
- Automation
- Security
- Operational efficiency
- Better customer experience

---

# Project Status

🚧 Active Development

Current focus:

- Backend API development
- Authentication system
- Organization management
- Member workflows
- Financial modules
- Frontend dashboard
- Cloud deployment

---

# Core Features

## Organization Management

Multi-tenant organization management.

Capabilities:

- Organization profiles
- User management
- Data isolation
- Role-based permissions

Roles:

| Role | Description |
|---|---|
| OWNER | Full organization control |
| ADMIN | Administrative operations |
| STAFF | Operational management |
| MEMBER | Member access |

---

# User Authentication

Secure authentication foundation.

Features:

- Email login
- Password hashing
- JWT authentication
- Role management
- Secure API access

Security principles:

- No plain-text passwords
- Protected sensitive data
- Environment-based secrets

---

# Member Management

Manage the complete member lifecycle.

Features:

- Member registration
- Profile management
- Contact details
- Group participation
- Payment history

---

# Chit Group Management

Create and manage chit groups.

Features:

- Group creation
- Total amount configuration
- Installment configuration
- Duration management
- Member allocation
- Status tracking

Lifecycle:

```
DRAFT
  |
  ↓
ACTIVE
  |
  ↓
COMPLETED
  |
  ↓
CANCELLED
```

---

# Installment Management

Track recurring financial commitments.

Features:

- Installment schedules
- Due dates
- Payment tracking
- Collection status

Payment states:

```
PENDING
PAID
LATE
CANCELLED
```

---

# Payment Management

Maintain transparent payment records.

Supported methods:

- Cash
- UPI
- Bank Transfer
- Card

Tracks:

- Amount
- Payment method
- Reference number
- Member relationship
- Transaction history

---

# Auction Management

Digital auction workflows.

Features:

- Auction scheduling
- Bid tracking
- Winner management
- Auction history

Auction lifecycle:

```
SCHEDULED
      |
      ↓
RUNNING
      |
      ↓
COMPLETED
```

---

# Architecture

Chitti follows a modern monorepo architecture.

```
Chitti
│
├── apps
│   │
│   └── web
│       └── Frontend Application
│
├── services
│   │
│   └── api
│       └── NestJS Backend API
│
├── packages
│   └── Shared Libraries
│
├── infrastructure
│   └── Deployment Configuration
│
├── docs
│   └── Technical Documentation
│
└── .github
    └── CI/CD Workflows
```

---

# Technology Stack

## Backend

- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT Authentication

## Frontend

- Next.js
- TypeScript
- Tailwind CSS

## Development Tools

- GitHub Actions
- ESLint
- Jest
- Prisma Studio

---

# Database Design

Core entities:

```
Organization
      |
      |
      ├── Users
      |
      ├── Members
      |
      └── Chit Groups
              |
              ├── Installments
              |
              ├── Payments
              |
              └── Auctions
```

Design goals:

- Data consistency
- Organization isolation
- Scalability
- Future analytics

---

# Security

Security is a primary design goal.

Implemented:

- Password hashing
- JWT authentication foundation
- DTO validation
- Secure database access
- Environment configuration

Planned:

- Role-based authorization guards
- Audit logging
- Rate limiting
- Security monitoring
- Advanced encryption

Security policy:

See:

```
SECURITY.md
```

---

# Repository Structure

```
Chitti

├── apps
├── services
├── packages
├── infrastructure
├── docs
├── .github
├── LICENSE
├── README.md
└── ROADMAP.md
```

---

# Getting Started

## Requirements

Install:

- Node.js 22+
- PostgreSQL
- Git
- npm or pnpm

---

# Clone Repository

```bash
git clone https://github.com/leolouis/Chitti.git

cd Chitti
```

---

# Install Dependencies

```bash
npm install
```

---

# Environment Setup

Create:

```
.env
```

Example:

```env
DATABASE_URL=

JWT_SECRET=

PORT=3000

NODE_ENV=development
```

---

# Backend Setup

Navigate:

```bash
cd services/api
```

Install:

```bash
npm install
```

Generate Prisma client:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate dev
```

Open database:

```bash
npx prisma studio
```

---

# Run Development Server

```bash
npm run dev
```

Build production:

```bash
npm run build
```

Start production:

```bash
npm run start
```

---

# Testing

Unit tests:

```bash
npm run test
```

End-to-end tests:

```bash
npm run test:e2e
```

---

# Deployment Architecture

```
                 Users

                   |

          Frontend Application

                   |

              Chitti API

                   |

          PostgreSQL Database

                   |

            Cloud Infrastructure
```

Recommended platforms:

## Frontend

- Vercel
- Cloudflare Pages
- GitHub Pages

## Backend

- AWS
- Railway
- Render
- DigitalOcean

## Database

- Managed PostgreSQL

---

# CI/CD

Development workflow:

```
Code Commit

     ↓

Automated Checks

     ↓

Build

     ↓

Tests

     ↓

Deployment
```

---

# Documentation

Documentation:

```
docs/

├── architecture.md
├── api.md
├── database.md
└── deployment.md
```

---

# Roadmap

## Phase 1 — Foundation

Completed:

- Repository setup
- Backend architecture
- Prisma schema
- Authentication foundation
- Organization module

---

## Phase 2 — Core Platform

In progress:

- Member management
- Chit group workflows
- Installment engine
- Payment workflows
- Auction workflows

---

## Phase 3 — Enterprise Platform

Future:

- Mobile applications
- Advanced analytics
- Notifications
- Reporting engine
- Audit systems
- Multi-language support
- AI-powered insights

---

# Contributing

Contributions are welcome.

Before contributing:

1. Create a feature branch
2. Follow project standards
3. Add tests
4. Update documentation
5. Submit a pull request

Example:

```bash
git checkout -b feature/new-feature
```

---

# Community

We welcome contributions from:

- Developers
- Designers
- FinTech enthusiasts
- Open-source contributors

Ways to help:

- Report issues
- Suggest improvements
- Improve documentation
- Submit pull requests

---

# License

MIT License

---

# Repository

GitHub:

https://github.com/leolouis/Chitti

---

# Recommended GitHub Topics

Add these repository topics:

```
chit-fund
fintech
finance
saas
financial-management
payment-system
auction-system
nestjs
typescript
postgresql
prisma
nextjs
react
tailwindcss
monorepo
open-source
india
```

---

# Built With Purpose

Chitti brings modern software engineering practices to traditional financial operations.

The goal is to create a secure, transparent, and scalable platform that empowers organizations worldwide.
```
