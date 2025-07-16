create table users (
  id uuid primary key default uuid_generate_v4(),
  email text unique not null,
  password_hash text not null,
  role text not null check (role in ('admin', 'employee')),
  name text,
  created_at timestamptz default now()
);

create table expenses (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id),
  category text,
  amount numeric,
  currency text default 'SAR',
  notes text,
  file_url text,
  status text default 'pending' check (status in ('pending', 'approved', 'rejected')),
  admin_comment text,
  submitted_at timestamptz default now(),
  approved_by uuid references users(id),
  approved_at timestamptz
);

create table investments (
  id uuid primary key default uuid_generate_v4(),
  name text,
  department text,
  amount numeric,
  start_date date,
  end_date date,
  notes text,
  created_at timestamptz default now()
);

create table tasks (
  id uuid primary key default uuid_generate_v4(),
  assigned_to uuid references users(id),
  title text,
  description text,
  deadline date,
  priority text,
  created_by uuid references users(id),
  created_at timestamptz default now(),
  completed boolean default false,
  completion_report text,
  completion_file_url text
);

create index on users(role);
