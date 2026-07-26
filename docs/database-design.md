# Chitti Database Design

## Overview

The Chitti database is designed to support modern chit fund operations with security, scalability, and auditability.

The database follows these principles:

- Data integrity
- Financial accuracy
- Audit transparency
- Scalability
- Secure access control

---

# Database Technology

Primary Database:

- PostgreSQL

Supporting Systems:

- Redis for caching and background jobs
- Object storage for documents and receipts

---

# Core Entities

## User

Represents people who access the Chitti platform.

Fields:

- id
- name
- email
- phone
- password_hash
- role
- organization_id
- created_at
- updated_at

Roles:

- Owner
- Admin
- Staff
- Member

---

# Organization

Represents a chit fund business or group operator.

Fields:

- id
- name
- registration_number
- address
- phone
- email
- created_at
- updated_at

Examples:

- ABC Chits Pvt Ltd
- Local community chit group

---

# Member

Represents participants in chit groups.

Fields:

- id
- organization_id
- name
- phone
- email
- address
- identity_details
- nominee_details
- status
- created_at
- updated_at

Status:

- Active
- Inactive
- Suspended

---

# Chit Group

Represents an individual chit scheme.

Fields:

- id
- organization_id
- name
- total_amount
- installment_amount
- duration
- member_count
- start_date
- end_date
- status
- created_at
- updated_at

Status:

- Draft
- Active
- Completed
- Cancelled

---

# Chit Membership

Connects members with chit groups.

Fields:

- id
- chit_group_id
- member_id
- ticket_number
- joining_date
- status

---

# Installment

Represents scheduled payments.

Fields:

- id
- chit_group_id
- member_id
- installment_number
- amount
- due_date
- paid_date
- status

Status:

- Pending
- Paid
- Late
- Cancelled

---

# Payment

Stores actual financial transactions.

Fields:

- id
- member_id
- chit_group_id
- amount
- payment_method
- transaction_reference
- payment_date
- status

Payment methods:

- Cash
- UPI
- Bank Transfer
- Card

---

# Auction

Represents chit auctions.

Fields:

- id
- chit_group_id
- auction_date
- starting_amount
- winning_bid
- winner_member_id
- status

Status:

- Scheduled
- Running
- Completed
- Cancelled

---

# Bid

Stores auction bids.

Fields:

- id
- auction_id
- member_id
- bid_amount
- created_at

---

# Ledger Entry

The financial history of the system.

Every important financial action creates a ledger entry.

Fields:

- id
- organization_id
- reference_type
- reference_id
- debit
- credit
- description
- created_at

Examples:

- Payment received
- Auction settlement
- Commission generated

---

# Receipt

Digital proof of transactions.

Fields:

- id
- payment_id
- receipt_number
- document_url
- generated_at

---

# Notification

Stores communication history.

Fields:

- id
- user_id
- type
- message
- status
- sent_at

Types:

- SMS
- WhatsApp
- Email
- Push Notification

---

# Audit Log

Tracks important system activity.

Fields:

- id
- user_id
- action
- entity_type
- entity_id
- old_value
- new_value
- created_at

Examples:

- Member created
- Payment edited
- Auction completed

---

# Database Relationships

```
Organization

    |
    |
    +---- Users

    |
    |
    +---- Chit Groups

              |
              |
              +---- Members

              |
              |
              +---- Installments

              |
              |
              +---- Auctions

                        |
                        |
                        +---- Bids


Payments

    |
    |
Ledger

    |
    |
Receipts
```

---

# Future Database Improvements

Planned:

- Event sourcing for financial history
- Read replicas for analytics
- Data warehouse integration
- Advanced fraud detection models
- Multi-region database support

---

# Database Philosophy

Financial data must be:

- Accurate
- Traceable
- Immutable where required
- Secure
- Available when needed

Chitti treats every financial event as a permanent part of the system history.
