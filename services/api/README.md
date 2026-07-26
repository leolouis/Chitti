# Chitti API Service

## Overview

The Chitti API is the core backend service powering the Chitti platform.

It provides secure APIs for:

- Authentication
- User management
- Organizations
- Members
- Chit groups
- Payments
- Auctions
- Reports

---

# Technology Stack

Backend:

- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- Redis

---

# Responsibilities

The API service handles:

- Business logic
- Data validation
- Database communication
- Authentication
- Authorization
- Audit logging
- API security

---

# Architecture

```
Client Applications

        |
        |

     REST API

        |
        |

   NestJS Backend

        |
        |

     Prisma ORM

        |
        |

   PostgreSQL Database
```

---

# Planned Modules

```
auth
users
organizations
members
chit-groups
installments
payments
auctions
notifications
reports
audit
```

---

# Development

Local development instructions will be added as the service evolves.

---

# Security

The API follows:

- Secure authentication
- Input validation
- Permission checks
- Audit trails
- Safe database access patterns
```
