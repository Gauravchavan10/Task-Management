export interface Task {
    taskId: number;
    title: string;
    description: string;
    dueDate: Date;
    priority: string; // High, Medium, Low, etc.
    status: string; // Open, In Progress, Completed, etc.
    assignedTo?: string; // Username of the assigned user
  }