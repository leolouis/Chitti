# Chitti

<p align="center">
  <strong>The Digital Operating System for Chit Fund Organizations</strong>
</p>

<p align="center">
  A secure, scalable, modern SaaS platform for managing chit groups, members, collections, auctions, payments, and financial operations.
</p>

<p align="center">
  Built with modern engineering practices for the future of community-based financial organizations.
</p>

---

# 🚀 Overview

Chitti is a next-generation digital platform designed to modernize chit fund operations.

Traditional chit organizations often depend on manual registers, spreadsheets, phone communication, and disconnected workflows.

Chitti provides a unified technology platform to manage the complete operational lifecycle:

- Organization management
- User management
- Member management
- Chit group operations
- Installments
- Payments
- Auctions
- Financial tracking
- Reporting infrastructure

The mission is to create a secure and scalable operating system for chit fund organizations worldwide.

---

# 🎯 Vision

Build the most trusted financial operations platform for community-driven organizations.

Chitti is designed around:

- Security-first engineering
- Financial transparency
- Operational automation
- Scalable cloud architecture
- Simple user experience
- Reliable data management

---

# Why Chitti?

## The Problem

Many chit fund organizations still rely on manual processes.

This creates challenges:

- Difficult collection management
- Manual calculations
- Lack of transparency
- Limited reporting
- Human errors
- Difficulty scaling operations
- Poor customer experience

## The Solution

Chitti introduces a modern digital infrastructure layer that enables organizations to:

- Manage operations digitally
- Track financial activity
- Improve transparency
- Reduce manual work
- Scale efficiently

---

# ✨ Features

## 🏢 Organization Management

A multi-tenant architecture allows multiple organizations to securely operate on the same platform.

Capabilities:

- Organization profiles
- Organization-level data isolation
- User management
- Role-based access control
- Secure operational workflows

Supported roles:

| Role | Responsibility |
|---|---|
| OWNER | Complete organization control |
| ADMIN | Administrative management |
| STAFF | Daily operational activities |
| MEMBER | Personal account access |

---

# 👥 Member Management

Manage the complete member lifecycle.

Features:

- Member registration
- Member profiles
- Contact information
- Chit participation
- Membership tracking
- Payment history

---

# 💰 Chit Group Management

Create and manage chit groups digitally.

Features:

- Create chit groups
- Configure total amount
- Configure installment amount
- Define duration
- Manage member count
- Track group status

Lifecycle:

```text
DRAFT
  |
  ↓
ACTIVE
  |
  ↓
COMPLETED
  |
  ↓
ARCHIVED
```

---

# 📅 Installment Management

Track scheduled financial commitments.

Features:

- Installment generation
- Due date tracking
- Payment status
- Paid date tracking
- Collection history

Payment states:

```text
PENDING
PAID
LATE
CANCELLED
```

---

# 💳 Payment Management

Maintain transparent financial records.

Supported payment methods:

- Cash
- UPI
- Bank Transfer
- Card

Payment tracking:

- Amount
- Payment method
- Reference number
- Member relationship
- Transaction history
- Collection records

---

# 🔨 Auction Management

Digital auction workflows.

Features:

- Auction scheduling
- Bid management
- Winner tracking
- Auction history
- Status management

Auction lifecycle:

```text
SCHEDULED
      |
      ↓
RUNNING
      |
      ↓
COMPLETED
```

---

# 🏗️ System Architecture

Chitti follows a modern monorepo architecture designed for scalability.

```text
Chitti
│
├── apps
│   │
│   └── web
│       └── Frontend application
│
├── services
│   │
│   └── api
│       └── NestJS backend service
│
├── packages
│   └── Shared libraries
│
├── infrastructure
│   └── Deployment configuration
│
├── docs
│   └── Technical documentation
│
└── .github
    └── CI/CD automation
```

---

# 🛠 Technology Stack

## Backend

Built with:

- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT Authentication

Engineering principles:

- Modular architecture
- Strong typing
- Clean separation of responsibilities
- Secure API design
- Maintainable services

---

## Frontend

Planned production stack:

- Next.js
- TypeScript
- Tailwind CSS
- Modern component architecture

Goals:

- Fast user experience
- Responsive dashboards
- Enterprise-grade interface
- Mobile-ready design

---

# 🗄 Database Architecture

Chitti uses PostgreSQL with Prisma ORM.

Core entities:

```text
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

Database design principles:

- Data consistency
- Tenant isolation
- Scalability
- Future analytics capability

---

# 🔐 Security Architecture

Security is a core engineering priority.

Implemented:

- Password hashing
- Environment-based secrets
- Prisma-safe database access
- DTO validation
- Secure API patterns

Planned:

- JWT authorization guards
- Role-based permissions
- Audit logs
- Rate limiting
- Security monitoring
- Advanced encryption
- Compliance-ready controls

---

# 📂 Repository Structure

```text
Chitti

├── apps
│   └── web

├── services
│   └── api

├── packages

├── infrastructure

├── docs

├── .github

├── README.md

└── LICENSE
```

---

# 💻 Local Development

## Requirements

Install:

- Node.js 22+
- PostgreSQL
- npm or pnpm
- Git

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

# Environment Configuration

Create environment files:

```text
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

Install dependencies:

```bash
npm install
```

Generate Prisma client:

```bash
npx prisma generate
```

Run database migrations:

```bash
npx prisma migrate dev
```

Open Prisma Studio:

```bash
npx prisma studio
```

---

# Run Application

Development:

```bash
npm run dev
```

Production:

```bash
npm run build

npm run start
```

---

# Testing

Run unit tests:

```bash
npm run test
```

Run end-to-end tests:

```bash
npm run test:e2e
```

---

# 🚀 Deployment Architecture

Production architecture:

```text
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

Recommended deployment:

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

Chitti uses automated development workflows.

Pipeline:

```text
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

# 🧑‍💻 Developer Experience

Engineering standards:

- TypeScript-first development
- Modular services
- Clear documentation
- Automated workflows
- Scalable architecture
- Production-quality practices

---

# 🗺 Roadmap

## Phase 1 — Foundation

Completed:

- Repository structure
- NestJS API foundation
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
- Auction management

---

## Phase 3 — Enterprise Platform

Future:

- Mobile applications
- Advanced analytics
- Automated notifications
- Reporting engine
- Audit trails
- Multi-language support
- AI-powered financial insights

---

# 🤝 Contributing

Contributions are welcome.

Before contributing:

1. Create a feature branch
2. Follow coding standards
3. Add tests
4. Update documentation
5. Submit a pull request

Example:

```bash
git checkout -b feature/new-feature
```

---

# 📄 License

MIT License

---

# 🔒 Security

For security issues, please refer to:

```text
SECURITY.md
```

Do not publicly disclose vulnerabilities.

---

# 📌 Project Information

Repository:

https://github.com/leolouis/Chitti

---

# Built With Purpose

Chitti brings modern software engineering practices to traditional financial operations.

The goal is to create a secure, transparent, and scalable platform that empowers chit fund organizations worldwide.
