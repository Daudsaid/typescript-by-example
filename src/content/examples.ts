import { Category, Example } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "basics",
    title: "Basics",
    description: "Master the fundamentals of TypeScript including variables, functions, objects, and arrays. These core concepts form the foundation for everything else you'll learn.",
    docsUrl: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html",
    examples: [
      {
        slug: "variables",
        title: "Variables",
        description:
          "TypeScript supports let and const for variable declarations with type inference and explicit type annotations.",
        code: `// Type inference - TypeScript infers the type
let message = "Hello, TypeScript!";
let count = 42;
let isActive = true;

// Explicit type annotations
let username: string = "alice";
let age: number = 25;
let isLoggedIn: boolean = false;

// const for immutable bindings
const API_URL = "https://api.example.com";
const MAX_RETRIES = 3;

// Arrays with type annotations
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];

// Alternative array syntax
let scores: Array<number> = [95, 87, 92];

console.log(message);
console.log(\`User: \${username}, Age: \${age}\`);
console.log(\`Numbers: \${numbers.join(", ")}\`);`,
        runCommand: "npx ts-node basics/variables.ts",
      },
      {
        slug: "functions",
        title: "Functions",
        description:
          "Functions in TypeScript can have typed parameters and return types, with support for optional and default parameters.",
        code: `// Basic function with typed parameters and return type
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function syntax
const multiply = (a: number, b: number): number => a * b;

// Optional parameters (marked with ?)
function greet(name: string, greeting?: string): string {
  return \`\${greeting || "Hello"}, \${name}!\`;
}

// Default parameters
function createUser(name: string, role: string = "user"): object {
  return { name, role, createdAt: new Date() };
}

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, n) => acc + n, 0);
}

// Function type annotation
type MathOperation = (a: number, b: number) => number;
const subtract: MathOperation = (a, b) => a - b;

console.log(add(5, 3));           // 8
console.log(multiply(4, 7));      // 28
console.log(greet("Alice"));      // Hello, Alice!
console.log(greet("Bob", "Hi"));  // Hi, Bob!
console.log(sum(1, 2, 3, 4, 5));  // 15`,
        runCommand: "npx ts-node basics/functions.ts",
      },
      {
        slug: "objects",
        title: "Objects",
        description:
          "Objects can be typed using interfaces or type aliases, providing structure and type safety.",
        code: `// Object type annotation inline
let user: { name: string; age: number } = {
  name: "Alice",
  age: 30,
};

// Using an interface
interface Person {
  name: string;
  age: number;
  email?: string; // Optional property
}

const alice: Person = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
};

const bob: Person = {
  name: "Bob",
  age: 25,
  // email is optional, so we can omit it
};

// Readonly properties
interface Config {
  readonly apiKey: string;
  readonly endpoint: string;
}

const config: Config = {
  apiKey: "secret-key-123",
  endpoint: "https://api.example.com",
};

// config.apiKey = "new-key"; // Error: Cannot assign to 'apiKey'

// Nested objects
interface Company {
  name: string;
  address: {
    street: string;
    city: string;
    country: string;
  };
}

const company: Company = {
  name: "Tech Corp",
  address: {
    street: "123 Main St",
    city: "San Francisco",
    country: "USA",
  },
};

console.log(\`\${alice.name} is \${alice.age} years old\`);
console.log(\`Company: \${company.name}, \${company.address.city}\`);`,
        runCommand: "npx ts-node basics/objects.ts",
      },
      {
        slug: "arrays",
        title: "Arrays",
        description:
          "TypeScript arrays are typed collections with powerful methods for transformation and iteration.",
        code: `// Typed arrays
const numbers: number[] = [1, 2, 3, 4, 5];
const names: string[] = ["Alice", "Bob", "Charlie"];

// Alternative syntax with Array generic
const scores: Array<number> = [95, 87, 92, 88];

// Array methods with type inference
const doubled = numbers.map((n) => n * 2);
const evens = numbers.filter((n) => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);

// Finding elements
const found = names.find((name) => name.startsWith("A"));
const index = names.findIndex((name) => name === "Bob");

// Checking conditions
const hasNegative = numbers.some((n) => n < 0);
const allPositive = numbers.every((n) => n > 0);

// Tuple types (fixed-length arrays with specific types)
const coordinate: [number, number] = [10, 20];
const userRecord: [number, string, boolean] = [1, "Alice", true];

// Destructuring
const [x, y] = coordinate;
const [id, username, isActive] = userRecord;

// Spread operator
const moreNumbers = [...numbers, 6, 7, 8];
const allNames = [...names, "David"];

console.log(\`Doubled: \${doubled}\`);
console.log(\`Sum: \${sum}\`);
console.log(\`Found: \${found}\`);
console.log(\`Coordinate: (\${x}, \${y})\`);`,
        runCommand: "npx ts-node basics/arrays.ts",
      },
    ],
  },
  {
    slug: "types",
    title: "Types",
    description: "Explore TypeScript's powerful type system including generics, union types, type guards, and utility types. Learn how to create flexible, reusable, and type-safe code.",
    docsUrl: "https://www.typescriptlang.org/docs/handbook/2/types-from-types.html",
    examples: [
      {
        slug: "generics",
        title: "Generics",
        description:
          "Generics allow you to write reusable code that works with multiple types while maintaining type safety.",
        code: `// Generic function
function identity<T>(value: T): T {
  return value;
}

const num = identity(42);        // type: number
const str = identity("hello");   // type: string

// Generic with constraints
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(value: T): T {
  console.log(\`Length: \${value.length}\`);
  return value;
}

logLength("hello");      // Length: 5
logLength([1, 2, 3]);    // Length: 3
// logLength(42);        // Error: number doesn't have length

// Generic interface
interface Result<T> {
  data: T;
  success: boolean;
  timestamp: Date;
}

const userResult: Result<{ name: string }> = {
  data: { name: "Alice" },
  success: true,
  timestamp: new Date(),
};

// Generic class
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop()); // 2

// Multiple type parameters
function pair<K, V>(key: K, value: V): [K, V] {
  return [key, value];
}

const kvPair = pair("name", "Alice"); // [string, string]
const mixedPair = pair(1, true);      // [number, boolean]`,
        runCommand: "npx ts-node types/generics.ts",
      },
      {
        slug: "unions",
        title: "Union Types",
        description:
          "Union types allow a value to be one of several types, enabling flexible yet type-safe code.",
        code: `// Basic union type
type StringOrNumber = string | number;

function formatValue(value: StringOrNumber): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}

console.log(formatValue("hello")); // HELLO
console.log(formatValue(42.567));  // 42.57

// Union with literals (discriminated unions)
type Status = "pending" | "success" | "error";

interface ApiResponse {
  status: Status;
  data?: unknown;
  error?: string;
}

function handleResponse(response: ApiResponse): void {
  switch (response.status) {
    case "pending":
      console.log("Loading...");
      break;
    case "success":
      console.log("Data:", response.data);
      break;
    case "error":
      console.log("Error:", response.error);
      break;
  }
}

// Discriminated union with type guards
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number }
  | { kind: "square"; size: number };

function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
    case "square":
      return shape.size ** 2;
  }
}

const circle: Shape = { kind: "circle", radius: 5 };
const rect: Shape = { kind: "rectangle", width: 4, height: 6 };

console.log(\`Circle area: \${calculateArea(circle).toFixed(2)}\`);
console.log(\`Rectangle area: \${calculateArea(rect)}\`);`,
        runCommand: "npx ts-node types/unions.ts",
      },
      {
        slug: "type-guards",
        title: "Type Guards",
        description:
          "Type guards narrow types at runtime, helping TypeScript understand which type you're working with.",
        code: `// typeof type guard
function padLeft(value: string | number, padding: string | number): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + value;
  }
  return padding + value;
}

console.log(padLeft("Hello", 4));     // "    Hello"
console.log(padLeft("Hello", ">>> ")); // ">>> Hello"

// instanceof type guard
class Dog {
  bark(): void {
    console.log("Woof!");
  }
}

class Cat {
  meow(): void {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

// Custom type guard with "is" keyword
interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird): void {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}

// in operator type guard
interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

function printInfo(person: Admin | Employee): void {
  console.log(\`Name: \${person.name}\`);
  if ("privileges" in person) {
    console.log(\`Privileges: \${person.privileges.join(", ")}\`);
  }
  if ("startDate" in person) {
    console.log(\`Start Date: \${person.startDate.toDateString()}\`);
  }
}

const admin: Admin = { name: "Alice", privileges: ["create", "delete"] };
printInfo(admin);`,
        runCommand: "npx ts-node types/type-guards.ts",
      },
      {
        slug: "utility-types",
        title: "Utility Types",
        description:
          "TypeScript provides built-in utility types for common type transformations.",
        code: `interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

// Partial<T> - makes all properties optional
type PartialUser = Partial<User>;
const updateData: PartialUser = { name: "New Name" };

// Required<T> - makes all properties required
interface Config {
  host?: string;
  port?: number;
}
type RequiredConfig = Required<Config>;

// Pick<T, K> - select specific properties
type UserCredentials = Pick<User, "email" | "password">;
const creds: UserCredentials = { email: "a@b.com", password: "secret" };

// Omit<T, K> - exclude specific properties
type PublicUser = Omit<User, "password">;
const publicUser: PublicUser = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  createdAt: new Date(),
};

// Readonly<T> - make all properties readonly
type ImmutableUser = Readonly<User>;

// Record<K, V> - create object type with specific keys
type UserRoles = Record<string, "admin" | "user" | "guest">;
const roles: UserRoles = {
  alice: "admin",
  bob: "user",
  guest1: "guest",
};

// Extract<T, U> - extract types assignable to U
type AllTypes = string | number | boolean | null;
type OnlyStrings = Extract<AllTypes, string | number>; // string | number

// Exclude<T, U> - exclude types assignable to U
type NonNullTypes = Exclude<AllTypes, null>; // string | number | boolean

// ReturnType<T> - get function return type
function createUser(name: string) {
  return { id: Math.random(), name, createdAt: new Date() };
}
type CreatedUser = ReturnType<typeof createUser>;

// Parameters<T> - get function parameter types
type CreateUserParams = Parameters<typeof createUser>; // [string]

console.log("Partial user update:", updateData);
console.log("Public user:", publicUser);`,
        runCommand: "npx ts-node types/utility-types.ts",
      },
    ],
  },
  {
    slug: "async",
    title: "Async",
    description: "Learn asynchronous programming patterns in TypeScript including Promises, async/await, and error handling. Essential for building modern web applications.",
    docsUrl: "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html#asyncawait-support-in-es6-targets-node-v4",
    examples: [
      {
        slug: "promises",
        title: "Promises",
        description:
          "Promises represent eventual completion or failure of async operations, with full type support.",
        code: `// Creating a typed Promise
function fetchUser(id: number): Promise<{ id: number; name: string }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: \`User \${id}\` });
      } else {
        reject(new Error("Invalid user ID"));
      }
    }, 100);
  });
}

// Promise chaining
fetchUser(1)
  .then((user) => {
    console.log(\`Found: \${user.name}\`);
    return user.id;
  })
  .then((id) => {
    console.log(\`User ID: \${id}\`);
  })
  .catch((error: Error) => {
    console.error(\`Error: \${error.message}\`);
  });

// Promise.all - run promises in parallel
async function fetchAllUsers(ids: number[]): Promise<{ id: number; name: string }[]> {
  const promises = ids.map((id) => fetchUser(id));
  return Promise.all(promises);
}

// Promise.race - first to complete wins
function timeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  const timeoutPromise = new Promise<never>((_, reject) => {
    setTimeout(() => reject(new Error("Timeout")), ms);
  });
  return Promise.race([promise, timeoutPromise]);
}

// Promise.allSettled - wait for all, regardless of success/failure
async function fetchWithStatus(ids: number[]) {
  const results = await Promise.allSettled(ids.map((id) => fetchUser(id)));

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(\`User \${ids[index]}: \${result.value.name}\`);
    } else {
      console.log(\`User \${ids[index]} failed: \${result.reason}\`);
    }
  });
}

fetchWithStatus([1, 2, -1, 3]);`,
        runCommand: "npx ts-node async/promises.ts",
      },
      {
        slug: "async-await",
        title: "Async/Await",
        description:
          "Async/await provides a cleaner syntax for working with Promises while maintaining full type safety.",
        code: `// Basic async function
async function fetchData(): Promise<string> {
  return "Data fetched!";
}

// Async function with await
interface User {
  id: number;
  name: string;
  email: string;
}

async function getUser(id: number): Promise<User> {
  // Simulating API call
  await new Promise((resolve) => setTimeout(resolve, 100));

  return {
    id,
    name: \`User \${id}\`,
    email: \`user\${id}@example.com\`,
  };
}

// Error handling with try/catch
async function getUserSafely(id: number): Promise<User | null> {
  try {
    const user = await getUser(id);
    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return null;
  }
}

// Sequential async operations
async function processUsers(ids: number[]): Promise<User[]> {
  const users: User[] = [];

  for (const id of ids) {
    const user = await getUser(id);
    users.push(user);
    console.log(\`Processed: \${user.name}\`);
  }

  return users;
}

// Parallel async operations
async function processUsersParallel(ids: number[]): Promise<User[]> {
  const userPromises = ids.map((id) => getUser(id));
  const users = await Promise.all(userPromises);
  return users;
}

// Async IIFE (Immediately Invoked Function Expression)
(async () => {
  console.log("Starting...");

  const user = await getUser(1);
  console.log(\`Got user: \${user.name}\`);

  const users = await processUsersParallel([2, 3, 4]);
  console.log(\`Got \${users.length} users in parallel\`);

  console.log("Done!");
})();`,
        runCommand: "npx ts-node async/async-await.ts",
      },
      {
        slug: "error-handling",
        title: "Error Handling",
        description:
          "Proper error handling in async code ensures robust applications with typed error states.",
        code: `// Custom error classes
class ApiError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public endpoint: string
  ) {
    super(message);
    this.name = "ApiError";
  }
}

class ValidationError extends Error {
  constructor(
    message: string,
    public field: string
  ) {
    super(message);
    this.name = "ValidationError";
  }
}

// Result type pattern (like Rust's Result)
type Result<T, E = Error> =
  | { success: true; data: T }
  | { success: false; error: E };

async function fetchWithResult<T>(url: string): Promise<Result<T>> {
  try {
    // Simulated fetch
    await new Promise((resolve) => setTimeout(resolve, 100));
    const data = { message: "Success" } as T;
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error : new Error(String(error))
    };
  }
}

// Using the Result pattern
async function processData(): Promise<void> {
  const result = await fetchWithResult<{ message: string }>("/api/data");

  if (result.success) {
    console.log("Data:", result.data.message);
  } else {
    console.error("Failed:", result.error.message);
  }
}

// Error type narrowing
async function handleRequest(): Promise<void> {
  try {
    throw new ApiError("Not found", 404, "/users/123");
  } catch (error) {
    if (error instanceof ApiError) {
      console.log(\`API Error [\${error.statusCode}]: \${error.message}\`);
      console.log(\`Endpoint: \${error.endpoint}\`);
    } else if (error instanceof ValidationError) {
      console.log(\`Validation Error on \${error.field}: \${error.message}\`);
    } else if (error instanceof Error) {
      console.log(\`Unknown error: \${error.message}\`);
    } else {
      console.log("Something went wrong");
    }
  }
}

// Run examples
processData();
handleRequest();`,
        runCommand: "npx ts-node async/error-handling.ts",
      },
    ],
  },
  {
    slug: "node",
    title: "Node",
    description: "Build server-side applications with TypeScript and Node.js. Covers file system operations, HTTP servers, and working with environment variables.",
    docsUrl: "https://nodejs.org/docs/latest/api/",
    examples: [
      {
        slug: "file-system",
        title: "File System",
        description:
          "Node.js file system operations with TypeScript provide type-safe file handling.",
        code: `import { readFile, writeFile, readdir, stat } from "fs/promises";
import { join } from "path";

// Read a file with proper typing
async function readTextFile(path: string): Promise<string> {
  const content = await readFile(path, "utf-8");
  return content;
}

// Write a file
async function writeTextFile(path: string, content: string): Promise<void> {
  await writeFile(path, content, "utf-8");
  console.log(\`Written to \${path}\`);
}

// Read JSON file with type parameter
async function readJsonFile<T>(path: string): Promise<T> {
  const content = await readFile(path, "utf-8");
  return JSON.parse(content) as T;
}

// Write JSON file
async function writeJsonFile<T>(path: string, data: T): Promise<void> {
  const content = JSON.stringify(data, null, 2);
  await writeFile(path, content, "utf-8");
}

// List directory contents
interface FileInfo {
  name: string;
  isDirectory: boolean;
  size: number;
}

async function listDirectory(dirPath: string): Promise<FileInfo[]> {
  const entries = await readdir(dirPath);

  const fileInfos = await Promise.all(
    entries.map(async (name) => {
      const fullPath = join(dirPath, name);
      const stats = await stat(fullPath);

      return {
        name,
        isDirectory: stats.isDirectory(),
        size: stats.size,
      };
    })
  );

  return fileInfos;
}

// Example usage
async function main(): Promise<void> {
  // Read package.json
  interface PackageJson {
    name: string;
    version: string;
    dependencies?: Record<string, string>;
  }

  const pkg = await readJsonFile<PackageJson>("./package.json");
  console.log(\`Package: \${pkg.name} v\${pkg.version}\`);

  // List current directory
  const files = await listDirectory(".");
  files.forEach((f) => {
    const type = f.isDirectory ? "[DIR]" : "[FILE]";
    console.log(\`\${type} \${f.name} (\${f.size} bytes)\`);
  });
}

main().catch(console.error);`,
        runCommand: "npx ts-node node/file-system.ts",
      },
      {
        slug: "http-server",
        title: "HTTP Server",
        description:
          "Create a type-safe HTTP server using Node.js built-in modules.",
        code: `import { createServer, IncomingMessage, ServerResponse } from "http";

// Route handler type
type RouteHandler = (
  req: IncomingMessage,
  res: ServerResponse
) => void | Promise<void>;

// Simple router
class Router {
  private routes: Map<string, Map<string, RouteHandler>> = new Map();

  get(path: string, handler: RouteHandler): void {
    this.addRoute("GET", path, handler);
  }

  post(path: string, handler: RouteHandler): void {
    this.addRoute("POST", path, handler);
  }

  private addRoute(method: string, path: string, handler: RouteHandler): void {
    if (!this.routes.has(method)) {
      this.routes.set(method, new Map());
    }
    this.routes.get(method)!.set(path, handler);
  }

  handle(req: IncomingMessage, res: ServerResponse): void {
    const method = req.method || "GET";
    const path = req.url || "/";

    const handler = this.routes.get(method)?.get(path);

    if (handler) {
      handler(req, res);
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ error: "Not found" }));
    }
  }
}

// JSON response helper
function json(res: ServerResponse, data: unknown, status = 200): void {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
}

// Create router and add routes
const router = new Router();

router.get("/", (req, res) => {
  json(res, { message: "Welcome to the API" });
});

router.get("/health", (req, res) => {
  json(res, { status: "healthy", timestamp: new Date().toISOString() });
});

router.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
  json(res, users);
});

// Create and start server
const server = createServer((req, res) => {
  router.handle(req, res);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(\`Server running at http://localhost:\${PORT}\`);
});`,
        runCommand: "npx ts-node node/http-server.ts",
      },
      {
        slug: "environment",
        title: "Environment Variables",
        description:
          "Type-safe environment variable handling ensures configuration is properly validated.",
        code: `// Type-safe environment configuration
interface EnvConfig {
  NODE_ENV: "development" | "production" | "test";
  PORT: number;
  DATABASE_URL: string;
  API_KEY: string;
  DEBUG: boolean;
}

// Environment variable parser
function getEnvString(key: string, defaultValue?: string): string {
  const value = process.env[key];
  if (value === undefined) {
    if (defaultValue !== undefined) return defaultValue;
    throw new Error(\`Missing required environment variable: \${key}\`);
  }
  return value;
}

function getEnvNumber(key: string, defaultValue?: number): number {
  const value = process.env[key];
  if (value === undefined) {
    if (defaultValue !== undefined) return defaultValue;
    throw new Error(\`Missing required environment variable: \${key}\`);
  }
  const parsed = parseInt(value, 10);
  if (isNaN(parsed)) {
    throw new Error(\`Environment variable \${key} must be a number\`);
  }
  return parsed;
}

function getEnvBoolean(key: string, defaultValue?: boolean): boolean {
  const value = process.env[key];
  if (value === undefined) {
    if (defaultValue !== undefined) return defaultValue;
    throw new Error(\`Missing required environment variable: \${key}\`);
  }
  return value.toLowerCase() === "true" || value === "1";
}

// Load and validate configuration
function loadConfig(): EnvConfig {
  const nodeEnv = getEnvString("NODE_ENV", "development");

  if (!["development", "production", "test"].includes(nodeEnv)) {
    throw new Error(\`Invalid NODE_ENV: \${nodeEnv}\`);
  }

  return {
    NODE_ENV: nodeEnv as EnvConfig["NODE_ENV"],
    PORT: getEnvNumber("PORT", 3000),
    DATABASE_URL: getEnvString("DATABASE_URL", "sqlite://local.db"),
    API_KEY: getEnvString("API_KEY", "dev-key"),
    DEBUG: getEnvBoolean("DEBUG", false),
  };
}

// Usage
const config = loadConfig();

console.log("Configuration loaded:");
console.log(\`  Environment: \${config.NODE_ENV}\`);
console.log(\`  Port: \${config.PORT}\`);
console.log(\`  Database: \${config.DATABASE_URL}\`);
console.log(\`  Debug mode: \${config.DEBUG}\`);

// Export for use in other modules
export { config, EnvConfig };`,
        runCommand: "npx ts-node node/environment.ts",
      },
    ],
  },
  {
    slug: "backend",
    title: "Backend",
    description: "Learn backend development patterns including REST APIs, database connections, authentication, and middleware. Build robust server applications with TypeScript.",
    docsUrl: "https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html",
    examples: [
      {
        slug: "express-api",
        title: "Express API",
        description: "Build a type-safe REST API with Express and TypeScript.",
        code: `import express, { Request, Response, NextFunction } from "express";

// Type definitions
interface User {
  id: number;
  name: string;
  email: string;
}

interface CreateUserBody {
  name: string;
  email: string;
}

// Typed request with body
interface TypedRequest<T> extends Request {
  body: T;
}

// In-memory storage
const users: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

// Express app
const app = express();
app.use(express.json());

// Error handler middleware
function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
}

// Routes
app.get("/api/users", (req: Request, res: Response) => {
  res.json(users);
});

app.get("/api/users/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const user = users.find((u) => u.id === id);

  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  res.json(user);
});

app.post(
  "/api/users",
  (req: TypedRequest<CreateUserBody>, res: Response) => {
    const { name, email } = req.body;

    if (!name || !email) {
      res.status(400).json({ error: "Name and email are required" });
      return;
    }

    const newUser: User = {
      id: users.length + 1,
      name,
      email,
    };

    users.push(newUser);
    res.status(201).json(newUser);
  }
);

app.delete("/api/users/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  users.splice(index, 1);
  res.status(204).send();
});

app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(\`API server running at http://localhost:\${PORT}\`);
});`,
        runCommand: "npx ts-node backend/express-api.ts",
      },
      {
        slug: "middleware",
        title: "Middleware",
        description:
          "Create reusable middleware functions with proper TypeScript types.",
        code: `import { Request, Response, NextFunction } from "express";

// Extend Request type for custom properties
interface AuthenticatedRequest extends Request {
  user?: {
    id: number;
    email: string;
    roles: string[];
  };
}

// Logging middleware
function logger(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(\`\${req.method} \${req.path} \${res.statusCode} - \${duration}ms\`);
  });

  next();
}

// Authentication middleware
function authenticate(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void {
  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    res.status(401).json({ error: "No token provided" });
    return;
  }

  // Simulated token validation
  if (token === "valid-token") {
    req.user = {
      id: 1,
      email: "user@example.com",
      roles: ["user", "admin"],
    };
    next();
  } else {
    res.status(401).json({ error: "Invalid token" });
  }
}

// Role-based authorization middleware factory
function requireRole(...roles: string[]) {
  return (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): void => {
    if (!req.user) {
      res.status(401).json({ error: "Not authenticated" });
      return;
    }

    const hasRole = roles.some((role) => req.user!.roles.includes(role));

    if (!hasRole) {
      res.status(403).json({ error: "Insufficient permissions" });
      return;
    }

    next();
  };
}

// Rate limiting middleware
function rateLimit(maxRequests: number, windowMs: number) {
  const requests = new Map<string, { count: number; resetTime: number }>();

  return (req: Request, res: Response, next: NextFunction): void => {
    const ip = req.ip || "unknown";
    const now = Date.now();
    const record = requests.get(ip);

    if (!record || now > record.resetTime) {
      requests.set(ip, { count: 1, resetTime: now + windowMs });
      next();
      return;
    }

    if (record.count >= maxRequests) {
      res.status(429).json({ error: "Too many requests" });
      return;
    }

    record.count++;
    next();
  };
}

// Usage example
// app.use(logger);
// app.use("/api", authenticate);
// app.use("/admin", requireRole("admin"));
// app.use(rateLimit(100, 60000)); // 100 requests per minute

export { logger, authenticate, requireRole, rateLimit, AuthenticatedRequest };`,
        runCommand: "npx ts-node backend/middleware.ts",
      },
      {
        slug: "validation",
        title: "Request Validation",
        description:
          "Validate and parse request data with type-safe schemas using Zod.",
        code: `import { z } from "zod";

// Define schemas with Zod
const UserSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  age: z.number().int().min(0).max(150).optional(),
  role: z.enum(["user", "admin", "moderator"]).default("user"),
});

const CreatePostSchema = z.object({
  title: z.string().min(1).max(200),
  content: z.string().min(10),
  tags: z.array(z.string()).max(5).optional(),
  published: z.boolean().default(false),
});

// Infer TypeScript types from schemas
type User = z.infer<typeof UserSchema>;
type CreatePost = z.infer<typeof CreatePostSchema>;

// Validation function with error handling
function validate<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; errors: string[] } {
  const result = schema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  const errors = result.error.errors.map(
    (err) => \`\${err.path.join(".")}: \${err.message}\`
  );

  return { success: false, errors };
}

// Example validation
const validUser = {
  name: "Alice",
  email: "alice@example.com",
  age: 25,
};

const invalidUser = {
  name: "A",
  email: "not-an-email",
  age: -5,
};

console.log("Valid user:", validate(UserSchema, validUser));
// { success: true, data: { name: "Alice", email: "...", age: 25, role: "user" } }

console.log("Invalid user:", validate(UserSchema, invalidUser));
// { success: false, errors: [...] }

// Custom validators
const PasswordSchema = z.string()
  .min(8, "Password must be at least 8 characters")
  .regex(/[A-Z]/, "Password must contain an uppercase letter")
  .regex(/[a-z]/, "Password must contain a lowercase letter")
  .regex(/[0-9]/, "Password must contain a number");

const RegisterSchema = z.object({
  username: z.string().min(3).max(20).regex(/^[a-zA-Z0-9_]+$/),
  email: z.string().email(),
  password: PasswordSchema,
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

// Test password validation
const registration = {
  username: "alice123",
  email: "alice@example.com",
  password: "SecurePass1",
  confirmPassword: "SecurePass1",
};

console.log("Registration:", validate(RegisterSchema, registration));`,
        runCommand: "npx ts-node backend/validation.ts",
      },
    ],
  },
  {
    slug: "patterns",
    title: "Patterns",
    description: "Explore design patterns and architectural best practices in TypeScript. Learn Singleton, Factory, Observer, and other proven patterns for scalable code.",
    docsUrl: "https://www.typescriptlang.org/docs/handbook/2/classes.html",
    examples: [
      {
        slug: "builder",
        title: "Builder Pattern",
        description:
          "The Builder pattern creates complex objects step by step with a fluent interface.",
        code: `// Product class
interface HttpRequest {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  headers: Record<string, string>;
  body?: unknown;
  timeout: number;
}

// Builder class
class RequestBuilder {
  private request: Partial<HttpRequest> = {
    method: "GET",
    headers: {},
    timeout: 5000,
  };

  setMethod(method: HttpRequest["method"]): this {
    this.request.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.request.url = url;
    return this;
  }

  addHeader(key: string, value: string): this {
    this.request.headers = {
      ...this.request.headers,
      [key]: value,
    };
    return this;
  }

  setBody(body: unknown): this {
    this.request.body = body;
    return this;
  }

  setTimeout(ms: number): this {
    this.request.timeout = ms;
    return this;
  }

  // Type-safe build that requires url
  build(): HttpRequest {
    if (!this.request.url) {
      throw new Error("URL is required");
    }

    return this.request as HttpRequest;
  }
}

// Usage with fluent API
const getRequest = new RequestBuilder()
  .setUrl("https://api.example.com/users")
  .addHeader("Accept", "application/json")
  .build();

const postRequest = new RequestBuilder()
  .setMethod("POST")
  .setUrl("https://api.example.com/users")
  .addHeader("Content-Type", "application/json")
  .addHeader("Authorization", "Bearer token123")
  .setBody({ name: "Alice", email: "alice@example.com" })
  .setTimeout(10000)
  .build();

console.log("GET request:", getRequest);
console.log("POST request:", postRequest);

// Generic builder for any type
class Builder<T extends object> {
  private obj: Partial<T> = {};

  set<K extends keyof T>(key: K, value: T[K]): this {
    this.obj[key] = value;
    return this;
  }

  build(): T {
    return this.obj as T;
  }
}

interface User {
  id: number;
  name: string;
  email: string;
}

const user = new Builder<User>()
  .set("id", 1)
  .set("name", "Bob")
  .set("email", "bob@example.com")
  .build();

console.log("User:", user);`,
        runCommand: "npx ts-node patterns/builder.ts",
      },
      {
        slug: "factory",
        title: "Factory Pattern",
        description:
          "The Factory pattern creates objects without exposing instantiation logic.",
        code: `// Product interface
interface Logger {
  log(message: string): void;
  error(message: string): void;
  warn(message: string): void;
}

// Concrete implementations
class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(\`[LOG] \${message}\`);
  }

  error(message: string): void {
    console.error(\`[ERROR] \${message}\`);
  }

  warn(message: string): void {
    console.warn(\`[WARN] \${message}\`);
  }
}

class FileLogger implements Logger {
  constructor(private filename: string) {}

  private write(level: string, message: string): void {
    const entry = \`[\${new Date().toISOString()}] [\${level}] \${message}\\n\`;
    // In real implementation, write to file
    console.log(\`Writing to \${this.filename}: \${entry.trim()}\`);
  }

  log(message: string): void {
    this.write("LOG", message);
  }

  error(message: string): void {
    this.write("ERROR", message);
  }

  warn(message: string): void {
    this.write("WARN", message);
  }
}

class JsonLogger implements Logger {
  private emit(level: string, message: string): void {
    const entry = JSON.stringify({
      timestamp: new Date().toISOString(),
      level,
      message,
    });
    console.log(entry);
  }

  log(message: string): void {
    this.emit("info", message);
  }

  error(message: string): void {
    this.emit("error", message);
  }

  warn(message: string): void {
    this.emit("warn", message);
  }
}

// Factory
type LoggerType = "console" | "file" | "json";

interface LoggerConfig {
  type: LoggerType;
  filename?: string;
}

class LoggerFactory {
  static create(config: LoggerConfig): Logger {
    switch (config.type) {
      case "console":
        return new ConsoleLogger();
      case "file":
        if (!config.filename) {
          throw new Error("Filename required for file logger");
        }
        return new FileLogger(config.filename);
      case "json":
        return new JsonLogger();
      default:
        throw new Error(\`Unknown logger type: \${config.type}\`);
    }
  }
}

// Usage
const consoleLogger = LoggerFactory.create({ type: "console" });
consoleLogger.log("Application started");

const fileLogger = LoggerFactory.create({
  type: "file",
  filename: "app.log"
});
fileLogger.error("Something went wrong");

const jsonLogger = LoggerFactory.create({ type: "json" });
jsonLogger.warn("Low memory warning");`,
        runCommand: "npx ts-node patterns/factory.ts",
      },
      {
        slug: "singleton",
        title: "Singleton Pattern",
        description:
          "The Singleton pattern ensures a class has only one instance throughout the application.",
        code: `// Database connection singleton
class Database {
  private static instance: Database | null = null;
  private connected: boolean = false;

  // Private constructor prevents direct instantiation
  private constructor(private connectionString: string) {}

  // Static method to get the single instance
  static getInstance(connectionString?: string): Database {
    if (!Database.instance) {
      if (!connectionString) {
        throw new Error("Connection string required for first initialization");
      }
      Database.instance = new Database(connectionString);
    }
    return Database.instance;
  }

  async connect(): Promise<void> {
    if (this.connected) {
      console.log("Already connected");
      return;
    }

    console.log(\`Connecting to \${this.connectionString}...\`);
    // Simulated connection
    await new Promise((resolve) => setTimeout(resolve, 100));
    this.connected = true;
    console.log("Connected!");
  }

  async query(sql: string): Promise<unknown[]> {
    if (!this.connected) {
      throw new Error("Not connected to database");
    }
    console.log(\`Executing: \${sql}\`);
    return []; // Simulated result
  }

  async disconnect(): Promise<void> {
    if (!this.connected) return;
    console.log("Disconnecting...");
    this.connected = false;
  }

  // For testing - reset the singleton
  static resetInstance(): void {
    Database.instance = null;
  }
}

// Configuration singleton using a class
class Config {
  private static instance: Config;
  private settings: Map<string, unknown> = new Map();

  private constructor() {
    // Load default settings
    this.settings.set("apiUrl", "https://api.example.com");
    this.settings.set("timeout", 5000);
    this.settings.set("debug", false);
  }

  static getInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  }

  get<T>(key: string): T | undefined {
    return this.settings.get(key) as T | undefined;
  }

  set<T>(key: string, value: T): void {
    this.settings.set(key, value);
  }
}

// Usage example
async function main(): Promise<void> {
  // Database singleton
  const db1 = Database.getInstance("postgres://localhost:5432/mydb");
  const db2 = Database.getInstance(); // Returns same instance

  console.log("Same instance?", db1 === db2); // true

  await db1.connect();
  await db1.query("SELECT * FROM users");

  // Config singleton
  const config = Config.getInstance();
  console.log("API URL:", config.get<string>("apiUrl"));

  config.set("debug", true);
  console.log("Debug mode:", config.get<boolean>("debug"));
}

main().catch(console.error);`,
        runCommand: "npx ts-node patterns/singleton.ts",
      },
      {
        slug: "observer",
        title: "Observer Pattern",
        description:
          "The Observer pattern defines a subscription mechanism to notify objects about events.",
        code: `// Event types
type EventMap = {
  userCreated: { userId: number; email: string };
  userDeleted: { userId: number };
  orderPlaced: { orderId: string; total: number };
};

// Generic typed event emitter
class TypedEventEmitter<T extends Record<string, unknown>> {
  private listeners: {
    [K in keyof T]?: Array<(data: T[K]) => void>;
  } = {};

  on<K extends keyof T>(event: K, callback: (data: T[K]) => void): () => void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event]!.push(callback);

    // Return unsubscribe function
    return () => this.off(event, callback);
  }

  off<K extends keyof T>(event: K, callback: (data: T[K]) => void): void {
    const callbacks = this.listeners[event];
    if (callbacks) {
      const index = callbacks.indexOf(callback);
      if (index > -1) {
        callbacks.splice(index, 1);
      }
    }
  }

  emit<K extends keyof T>(event: K, data: T[K]): void {
    const callbacks = this.listeners[event];
    if (callbacks) {
      callbacks.forEach((callback) => callback(data));
    }
  }

  once<K extends keyof T>(event: K, callback: (data: T[K]) => void): void {
    const unsubscribe = this.on(event, (data) => {
      unsubscribe();
      callback(data);
    });
  }
}

// Usage with application events
const events = new TypedEventEmitter<EventMap>();

// Subscribe to events
events.on("userCreated", ({ userId, email }) => {
  console.log(\`New user: \${email} (ID: \${userId})\`);
});

events.on("userCreated", ({ email }) => {
  console.log(\`Sending welcome email to \${email}\`);
});

const unsubscribeOrder = events.on("orderPlaced", ({ orderId, total }) => {
  console.log(\`Order \${orderId}: $\${total.toFixed(2)}\`);
});

// One-time subscription
events.once("userDeleted", ({ userId }) => {
  console.log(\`User \${userId} deleted (one-time notification)\`);
});

// Emit events
events.emit("userCreated", { userId: 1, email: "alice@example.com" });
events.emit("orderPlaced", { orderId: "ORD-001", total: 99.99 });
events.emit("userDeleted", { userId: 1 });
events.emit("userDeleted", { userId: 2 }); // Won't trigger once handler

// Unsubscribe from order events
unsubscribeOrder();
events.emit("orderPlaced", { orderId: "ORD-002", total: 149.99 }); // Not logged`,
        runCommand: "npx ts-node patterns/observer.ts",
      },
    ],
  },
  {
    slug: "react",
    title: "React",
    description: "Build modern user interfaces with React and TypeScript. Learn typed components, hooks, context, and state management for robust frontend applications.",
    docsUrl: "https://react.dev/learn/typescript",
    examples: [
      {
        slug: "components",
        title: "Components & Props",
        description:
          "Type-safe React components with properly typed props, children, and default values.",
        code: `import React from "react";

// Basic props interface
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
}

// Functional component with typed props
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  disabled = false,
}) => {
  const baseStyles = "px-4 py-2 rounded font-medium";
  const variantStyles = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-200 text-gray-800",
    danger: "bg-red-500 text-white",
  };

  return (
    <button
      className={\`\${baseStyles} \${variantStyles[variant]}\`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

// Props with children
interface CardProps {
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children, footer }) => (
  <div className="border rounded-lg shadow-sm">
    <div className="p-4 border-b font-semibold">{title}</div>
    <div className="p-4">{children}</div>
    {footer && <div className="p-4 border-t bg-gray-50">{footer}</div>}
  </div>
);

// Generic component props
interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor: (item: T) => string;
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={keyExtractor(item)}>{renderItem(item, index)}</li>
      ))}
    </ul>
  );
}

// Usage
const App = () => (
  <div>
    <Button label="Click me" onClick={() => console.log("Clicked!")} />
    <Card title="Welcome">
      <p>This is the card content.</p>
    </Card>
    <List
      items={[{ id: "1", name: "Alice" }, { id: "2", name: "Bob" }]}
      renderItem={(user) => <span>{user.name}</span>}
      keyExtractor={(user) => user.id}
    />
  </div>
);`,
        runCommand: "npx create-react-app my-app --template typescript",
      },
      {
        slug: "hooks",
        title: "Hooks",
        description:
          "Type-safe React hooks including useState, useEffect, useRef, useReducer, and custom hooks.",
        code: `import { useState, useEffect, useRef, useReducer, useCallback, useMemo } from "react";

// useState with type inference
function Counter() {
  const [count, setCount] = useState(0); // inferred as number
  const [name, setName] = useState<string | null>(null); // explicit union type

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setName("Alice")}>Set Name</button>
    </div>
  );
}

// useRef with proper typing
function TextInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const renderCount = useRef(0); // mutable ref for values

  useEffect(() => {
    renderCount.current += 1;
  });

  const focusInput = () => {
    inputRef.current?.focus(); // optional chaining for null safety
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus</button>
      <p>Renders: {renderCount.current}</p>
    </div>
  );
}

// useReducer with typed state and actions
interface State {
  count: number;
  error: string | null;
}

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset"; payload: number }
  | { type: "setError"; payload: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1, error: null };
    case "decrement":
      return { ...state, count: state.count - 1, error: null };
    case "reset":
      return { ...state, count: action.payload, error: null };
    case "setError":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

function ReducerExample() {
  const [state, dispatch] = useReducer(reducer, { count: 0, error: null });

  return (
    <div>
      <p>Count: {state.count}</p>
      {state.error && <p className="error">{state.error}</p>}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset", payload: 0 })}>Reset</button>
    </div>
  );
}

// Custom hook with generics
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    window.localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [storedValue, setValue] as const;
}

// Usage
function App() {
  const [theme, setTheme] = useLocalStorage<"light" | "dark">("theme", "light");
  return <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme}</button>;
}`,
        runCommand: "npm install react react-dom @types/react @types/react-dom",
      },
      {
        slug: "context",
        title: "Context API",
        description:
          "Type-safe React Context for global state management with proper typing for providers and consumers.",
        code: `import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

// Define the shape of your context
interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user" | "guest";
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
}

// Create context with undefined default (will be provided by provider)
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook for using the context with type safety
function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// Provider component
interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback(async (email: string, password: string) => {
    // Simulate API call
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    const userData: User = await response.json();
    setUser(userData);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const updateUser = useCallback((updates: Partial<User>) => {
    setUser((prev) => (prev ? { ...prev, ...updates } : null));
  }, []);

  const value: AuthContextType = {
    user,
    isAuthenticated: user !== null,
    login,
    logout,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Theme context example with generics
type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}

// Usage in components
function UserProfile() {
  const { user, logout, isAuthenticated } = useAuth();
  const { theme, setTheme } = useTheme();

  if (!isAuthenticated) {
    return <p>Please log in</p>;
  }

  return (
    <div>
      <h2>Welcome, {user?.name}</h2>
      <p>Role: {user?.role}</p>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle Theme
      </button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

// App with providers
function App() {
  return (
    <AuthProvider>
      <UserProfile />
    </AuthProvider>
  );
}

export { AuthProvider, useAuth, ThemeContext, useTheme };`,
        runCommand: "npm install react @types/react",
      },
      {
        slug: "events",
        title: "Event Handling",
        description:
          "Properly typed event handlers for forms, inputs, clicks, and other DOM events in React.",
        code: `import React, { useState, FormEvent, ChangeEvent, MouseEvent, KeyboardEvent } from "react";

// Form event handling
interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

function LoginForm() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState<Partial<LoginFormData>>({});

  // Generic change handler for inputs
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <label>
        <input
          type="checkbox"
          name="rememberMe"
          checked={formData.rememberMe}
          onChange={handleChange}
        />
        Remember me
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

// Mouse events with proper typing
interface ButtonWithContextMenuProps {
  onAction: (action: string) => void;
}

function ButtonWithContextMenu({ onAction }: ButtonWithContextMenuProps) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(\`Clicked at: \${e.clientX}, \${e.clientY}\`);
    onAction("click");
  };

  const handleContextMenu = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Right-clicked!");
    onAction("contextmenu");
  };

  return (
    <button onClick={handleClick} onContextMenu={handleContextMenu}>
      Click or Right-click
    </button>
  );
}

// Keyboard events
function SearchInput() {
  const [query, setQuery] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("Searching for:", query);
    }
    if (e.key === "Escape") {
      setQuery("");
    }
  };

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Search... (Enter to submit, Escape to clear)"
    />
  );
}

// Select and textarea
function ProfileForm() {
  const [bio, setBio] = useState("");
  const [country, setCountry] = useState("");

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value);
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
  };

  return (
    <div>
      <textarea
        value={bio}
        onChange={handleTextareaChange}
        placeholder="Tell us about yourself"
        maxLength={500}
      />
      <p>{bio.length}/500</p>

      <select value={country} onChange={handleSelectChange}>
        <option value="">Select country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
      </select>
    </div>
  );
}

export { LoginForm, ButtonWithContextMenu, SearchInput, ProfileForm };`,
        runCommand: "npm install react @types/react",
      },
      {
        slug: "forms",
        title: "Form Libraries",
        description:
          "Type-safe form handling with React Hook Form and Zod validation for robust form management.",
        code: `import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define validation schema with Zod
const registrationSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  confirmPassword: z.string(),
  age: z.number().min(18, "Must be at least 18 years old").max(120),
  role: z.enum(["user", "admin", "moderator"]),
  newsletter: z.boolean().default(false),
  website: z.string().url().optional().or(z.literal("")),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

// Infer TypeScript type from Zod schema
type RegistrationFormData = z.infer<typeof registrationSchema>;

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    mode: "onChange",
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      age: 18,
      role: "user",
      newsletter: false,
      website: "",
    },
  });

  const onSubmit: SubmitHandler<RegistrationFormData> = async (data) => {
    try {
      console.log("Form data:", data);
      // await registerUser(data);
      reset();
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const password = watch("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Username */}
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          {...register("username")}
          className={errors.username ? "border-red-500" : ""}
        />
        {errors.username && (
          <span className="text-red-500 text-sm">{errors.username.message}</span>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...register("email")} />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" {...register("password")} />
        {errors.password && (
          <span className="text-red-500 text-sm">{errors.password.message}</span>
        )}
      </div>

      {/* Confirm Password */}
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input id="confirmPassword" type="password" {...register("confirmPassword")} />
        {errors.confirmPassword && (
          <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>
        )}
      </div>

      {/* Age with Controller for number input */}
      <div>
        <label htmlFor="age">Age</label>
        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <input
              id="age"
              type="number"
              {...field}
              onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
            />
          )}
        />
        {errors.age && <span className="text-red-500 text-sm">{errors.age.message}</span>}
      </div>

      {/* Role select */}
      <div>
        <label htmlFor="role">Role</label>
        <select id="role" {...register("role")}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="moderator">Moderator</option>
        </select>
      </div>

      {/* Newsletter checkbox */}
      <div>
        <label>
          <input type="checkbox" {...register("newsletter")} />
          Subscribe to newsletter
        </label>
      </div>

      <button type="submit" disabled={isSubmitting || !isValid}>
        {isSubmitting ? "Registering..." : "Register"}
      </button>
    </form>
  );
}

export { RegistrationForm, registrationSchema };`,
        runCommand: "npm install react-hook-form @hookform/resolvers zod",
      },
    ],
  },
  {
    slug: "nextjs",
    title: "Next.js",
    description: "Master full-stack development with Next.js and TypeScript. Covers App Router, Server Components, API routes, and data fetching patterns.",
    docsUrl: "https://nextjs.org/docs",
    examples: [
      {
        slug: "server-components",
        title: "Server Components",
        description:
          "Type-safe Server Components with async data fetching and proper typing for Next.js App Router.",
        code: `// app/users/page.tsx - Server Component (default in App Router)
interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
}

interface UsersPageProps {
  searchParams: Promise<{ page?: string; role?: string }>;
}

async function getUsers(page: number, role?: string): Promise<User[]> {
  const params = new URLSearchParams({ page: String(page) });
  if (role) params.set("role", role);

  const res = await fetch(\`https://api.example.com/users?\${params}\`, {
    next: { revalidate: 60 }, // ISR: revalidate every 60 seconds
  });

  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export default async function UsersPage({ searchParams }: UsersPageProps) {
  const { page = "1", role } = await searchParams;
  const users = await getUsers(parseInt(page), role);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email}) - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

// app/users/[id]/page.tsx - Dynamic route with params
interface UserPageProps {
  params: Promise<{ id: string }>;
}

async function getUser(id: string): Promise<User> {
  const res = await fetch(\`https://api.example.com/users/\${id}\`, {
    cache: "no-store", // Dynamic data
  });
  if (!res.ok) throw new Error("User not found");
  return res.json();
}

export async function generateMetadata({ params }: UserPageProps) {
  const { id } = await params;
  const user = await getUser(id);
  return {
    title: user.name,
    description: \`Profile of \${user.name}\`,
  };
}

export default async function UserPage({ params }: UserPageProps) {
  const { id } = await params;
  const user = await getUser(id);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

// Generate static paths
export async function generateStaticParams(): Promise<{ id: string }[]> {
  const users = await getUsers(1);
  return users.map((user) => ({ id: String(user.id) }));
}`,
        runCommand: "npx create-next-app@latest --typescript",
      },
      {
        slug: "server-actions",
        title: "Server Actions",
        description:
          "Type-safe Server Actions for form handling and mutations in Next.js with proper error handling.",
        code: `// app/actions/user.ts
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

// Validation schema
const CreateUserSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  role: z.enum(["admin", "user"]).default("user"),
});

const UpdateUserSchema = CreateUserSchema.partial();

// Action result type
type ActionResult<T> =
  | { success: true; data: T }
  | { success: false; error: string; fieldErrors?: Record<string, string[]> };

// Create user action
export async function createUser(
  formData: FormData
): Promise<ActionResult<{ id: number }>> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    role: formData.get("role"),
  };

  const validatedFields = CreateUserSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      error: "Validation failed",
      fieldErrors: validatedFields.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  try {
    const response = await fetch("https://api.example.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validatedFields.data),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    const user = await response.json();

    revalidatePath("/users");
    return { success: true, data: { id: user.id } };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

// Update user action
export async function updateUser(
  id: number,
  formData: FormData
): Promise<ActionResult<void>> {
  const rawData = Object.fromEntries(formData);
  const validatedFields = UpdateUserSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      error: "Validation failed",
      fieldErrors: validatedFields.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  try {
    await fetch(\`https://api.example.com/users/\${id}\`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validatedFields.data),
    });

    revalidatePath("/users");
    revalidatePath(\`/users/\${id}\`);
    return { success: true, data: undefined };
  } catch (error) {
    return { success: false, error: "Failed to update user" };
  }
}

// Delete user action
export async function deleteUser(id: number): Promise<ActionResult<void>> {
  try {
    await fetch(\`https://api.example.com/users/\${id}\`, {
      method: "DELETE",
    });

    revalidatePath("/users");
    redirect("/users");
  } catch (error) {
    return { success: false, error: "Failed to delete user" };
  }
}

// app/users/new/page.tsx - Form using server action
import { createUser } from "@/app/actions/user";

export default function NewUserPage() {
  return (
    <form action={createUser}>
      <input name="name" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <select name="role">
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Create User</button>
    </form>
  );
}`,
        runCommand: "npx create-next-app@latest --typescript",
      },
      {
        slug: "api-routes",
        title: "API Routes",
        description:
          "Type-safe API route handlers in Next.js App Router with request/response typing.",
        code: `// app/api/users/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Types
interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

// Validation schemas
const CreateUserSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
});

const QuerySchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  search: z.string().optional(),
});

// Response helpers
function jsonResponse<T>(data: T, status = 200) {
  return NextResponse.json(data, { status });
}

function errorResponse(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status });
}

// GET /api/users - List users
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = QuerySchema.parse(Object.fromEntries(searchParams));

    // Simulate database query
    const users: User[] = [
      { id: 1, name: "Alice", email: "alice@example.com", createdAt: new Date() },
      { id: 2, name: "Bob", email: "bob@example.com", createdAt: new Date() },
    ];

    return jsonResponse({
      data: users,
      pagination: {
        page: query.page,
        limit: query.limit,
        total: users.length,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return errorResponse("Invalid query parameters", 400);
    }
    return errorResponse("Internal server error", 500);
  }
}

// POST /api/users - Create user
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = CreateUserSchema.parse(body);

    // Simulate creating user
    const newUser: User = {
      id: Date.now(),
      ...data,
      createdAt: new Date(),
    };

    return jsonResponse(newUser, 201);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return jsonResponse(
        { error: "Validation failed", details: error.errors },
        400
      );
    }
    return errorResponse("Internal server error", 500);
  }
}

// app/api/users/[id]/route.ts - Dynamic route
interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  const userId = parseInt(id, 10);

  if (isNaN(userId)) {
    return errorResponse("Invalid user ID", 400);
  }

  // Simulate fetching user
  const user: User | null = {
    id: userId,
    name: "Alice",
    email: "alice@example.com",
    createdAt: new Date(),
  };

  if (!user) {
    return errorResponse("User not found", 404);
  }

  return jsonResponse(user);
}

export async function PATCH(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  const userId = parseInt(id, 10);
  const body = await request.json();

  const UpdateSchema = CreateUserSchema.partial();
  const data = UpdateSchema.parse(body);

  // Simulate updating user
  const updatedUser: User = {
    id: userId,
    name: data.name || "Alice",
    email: data.email || "alice@example.com",
    createdAt: new Date(),
  };

  return jsonResponse(updatedUser);
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  // Simulate deleting user
  return new NextResponse(null, { status: 204 });
}`,
        runCommand: "npx create-next-app@latest --typescript",
      },
      {
        slug: "middleware",
        title: "Middleware",
        description:
          "Type-safe Next.js middleware for authentication, redirects, and request modification.",
        code: `// middleware.ts (in project root)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Types for JWT payload
interface JWTPayload {
  sub: string;
  email: string;
  role: "admin" | "user" | "guest";
  exp: number;
}

// Protected routes configuration
const protectedRoutes = ["/dashboard", "/profile", "/settings"];
const adminRoutes = ["/admin"];
const authRoutes = ["/login", "/register"];

// Simple JWT decoder (use a library in production)
function decodeToken(token: string): JWTPayload | null {
  try {
    const payload = token.split(".")[1];
    return JSON.parse(atob(payload));
  } catch {
    return null;
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("auth-token")?.value;

  // Decode and validate token
  const user = token ? decodeToken(token) : null;
  const isAuthenticated = user && user.exp * 1000 > Date.now();

  // Check if route is protected
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );
  const isAdminRoute = adminRoutes.some((route) => pathname.startsWith(route));
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  // Redirect authenticated users away from auth pages
  if (isAuthRoute && isAuthenticated) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Redirect unauthenticated users to login
  if (isProtectedRoute && !isAuthenticated) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Check admin access
  if (isAdminRoute) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    if (user?.role !== "admin") {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  }

  // Add user info to headers for server components
  const response = NextResponse.next();
  if (user) {
    response.headers.set("x-user-id", user.sub);
    response.headers.set("x-user-role", user.role);
  }

  return response;
}

// Configure which routes middleware runs on
export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

// middleware/withAuth.ts - Middleware composition helper
type MiddlewareHandler = (
  request: NextRequest
) => NextResponse | Promise<NextResponse>;

export function composeMiddleware(...handlers: MiddlewareHandler[]) {
  return async (request: NextRequest): Promise<NextResponse> => {
    for (const handler of handlers) {
      const response = await handler(request);
      if (response.status !== 200) {
        return response;
      }
    }
    return NextResponse.next();
  };
}`,
        runCommand: "npx create-next-app@latest --typescript",
      },
    ],
  },
  {
    slug: "angular",
    title: "Angular",
    description: "Build enterprise-grade applications with Angular and TypeScript. Learn components, services, dependency injection, and reactive forms.",
    docsUrl: "https://angular.dev/overview",
    examples: [
      {
        slug: "components",
        title: "Components",
        description:
          "Type-safe Angular components with proper Input/Output decorators and lifecycle hooks.",
        code: `// user-card.component.ts
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
} from "@angular/core";

// Interface for component data
interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  role: "admin" | "user" | "guest";
}

interface UserAction {
  type: "edit" | "delete" | "view";
  user: User;
}

@Component({
  selector: "app-user-card",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`
    <div class="user-card" [class.admin]="user.role === 'admin'">
      <img [src]="user.avatar || defaultAvatar" [alt]="user.name" />
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
      <span class="role-badge">{{ user.role }}</span>

      <div class="actions">
        <button (click)="onAction('view')">View</button>
        <button (click)="onAction('edit')" *ngIf="editable">Edit</button>
        <button (click)="onAction('delete')" *ngIf="deletable">Delete</button>
      </div>
    </div>
  \`,
  styles: [\`
    .user-card { padding: 1rem; border: 1px solid #ddd; border-radius: 8px; }
    .admin { border-color: #3b82f6; }
    .role-badge { padding: 2px 8px; border-radius: 4px; background: #e5e7eb; }
  \`],
})
export class UserCardComponent implements OnInit, OnChanges {
  // Input properties with default values
  @Input({ required: true }) user!: User;
  @Input() editable = false;
  @Input() deletable = false;
  @Input() defaultAvatar = "/assets/default-avatar.png";

  // Output events
  @Output() action = new EventEmitter<UserAction>();
  @Output() userChange = new EventEmitter<User>();

  ngOnInit(): void {
    console.log("UserCard initialized for:", this.user.name);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["user"]) {
      console.log(
        "User changed from",
        changes["user"].previousValue,
        "to",
        changes["user"].currentValue
      );
    }
  }

  onAction(type: UserAction["type"]): void {
    this.action.emit({ type, user: this.user });
  }
}

// user-list.component.ts - Parent component
@Component({
  selector: "app-user-list",
  standalone: true,
  imports: [UserCardComponent],
  template: \`
    <div class="user-list">
      <h2>Users ({{ users.length }})</h2>
      @for (user of users; track user.id) {
        <app-user-card
          [user]="user"
          [editable]="canEdit"
          [deletable]="canDelete"
          (action)="handleAction($event)"
        />
      }
    </div>
  \`,
})
export class UserListComponent {
  users: User[] = [
    { id: 1, name: "Alice", email: "alice@example.com", role: "admin" },
    { id: 2, name: "Bob", email: "bob@example.com", role: "user" },
  ];

  canEdit = true;
  canDelete = false;

  handleAction(event: UserAction): void {
    console.log(\`Action: \${event.type} on user: \${event.user.name}\`);

    switch (event.type) {
      case "view":
        // Navigate to user detail
        break;
      case "edit":
        // Open edit modal
        break;
      case "delete":
        this.users = this.users.filter((u) => u.id !== event.user.id);
        break;
    }
  }
}`,
        runCommand: "ng new my-app --strict",
      },
      {
        slug: "services",
        title: "Services & DI",
        description:
          "Type-safe Angular services with dependency injection, HTTP client, and RxJS observables.",
        code: `// user.service.ts
import { Injectable, inject } from "@angular/core";
import { HttpClient, HttpParams, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError, BehaviorSubject } from "rxjs";
import { map, catchError, tap, retry } from "rxjs/operators";

// Types
interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
}

interface CreateUserDto {
  name: string;
  email: string;
  role?: "admin" | "user";
}

interface UpdateUserDto extends Partial<CreateUserDto> {}

interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

interface QueryParams {
  page?: number;
  limit?: number;
  search?: string;
  role?: "admin" | "user";
}

@Injectable({
  providedIn: "root",
})
export class UserService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = "/api/users";

  // State management with BehaviorSubject
  private usersSubject = new BehaviorSubject<User[]>([]);
  public users$ = this.usersSubject.asObservable();

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  // GET all users with pagination
  getUsers(params: QueryParams = {}): Observable<PaginatedResponse<User>> {
    let httpParams = new HttpParams();

    if (params.page) httpParams = httpParams.set("page", params.page.toString());
    if (params.limit) httpParams = httpParams.set("limit", params.limit.toString());
    if (params.search) httpParams = httpParams.set("search", params.search);
    if (params.role) httpParams = httpParams.set("role", params.role);

    this.loadingSubject.next(true);

    return this.http
      .get<PaginatedResponse<User>>(this.apiUrl, { params: httpParams })
      .pipe(
        tap((response) => {
          this.usersSubject.next(response.data);
          this.loadingSubject.next(false);
        }),
        catchError(this.handleError.bind(this))
      );
  }

  // GET single user
  getUser(id: number): Observable<User> {
    return this.http.get<User>(\`\${this.apiUrl}/\${id}\`).pipe(
      retry(2),
      catchError(this.handleError.bind(this))
    );
  }

  // POST create user
  createUser(data: CreateUserDto): Observable<User> {
    return this.http.post<User>(this.apiUrl, data).pipe(
      tap((newUser) => {
        const currentUsers = this.usersSubject.value;
        this.usersSubject.next([...currentUsers, newUser]);
      }),
      catchError(this.handleError.bind(this))
    );
  }

  // PATCH update user
  updateUser(id: number, data: UpdateUserDto): Observable<User> {
    return this.http.patch<User>(\`\${this.apiUrl}/\${id}\`, data).pipe(
      tap((updatedUser) => {
        const currentUsers = this.usersSubject.value;
        const index = currentUsers.findIndex((u) => u.id === id);
        if (index !== -1) {
          currentUsers[index] = updatedUser;
          this.usersSubject.next([...currentUsers]);
        }
      }),
      catchError(this.handleError.bind(this))
    );
  }

  // DELETE user
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(\`\${this.apiUrl}/\${id}\`).pipe(
      tap(() => {
        const currentUsers = this.usersSubject.value;
        this.usersSubject.next(currentUsers.filter((u) => u.id !== id));
      }),
      catchError(this.handleError.bind(this))
    );
  }

  // Error handler
  private handleError(error: HttpErrorResponse): Observable<never> {
    this.loadingSubject.next(false);

    let errorMessage = "An error occurred";

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = error.error.message;
    } else {
      // Server-side error
      errorMessage = \`Error Code: \${error.status}\\nMessage: \${error.message}\`;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}

// auth.service.ts - Authentication service
@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  public get isAuthenticated(): boolean {
    return this.currentUserValue !== null;
  }

  login(email: string, password: string): Observable<{ user: User; token: string }> {
    return this.http
      .post<{ user: User; token: string }>("/api/auth/login", { email, password })
      .pipe(
        tap((response) => {
          localStorage.setItem("token", response.token);
          this.currentUserSubject.next(response.user);
        })
      );
  }

  logout(): void {
    localStorage.removeItem("token");
    this.currentUserSubject.next(null);
  }
}`,
        runCommand: "ng generate service user",
      },
      {
        slug: "forms",
        title: "Reactive Forms",
        description:
          "Type-safe Angular reactive forms with validation, custom validators, and form arrays.",
        code: `// registration-form.component.ts
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  AbstractControl,
  ValidationErrors,
  ReactiveFormsModule,
} from "@angular/forms";
import { CommonModule } from "@angular/common";

// Form value interface
interface RegistrationForm {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
  };
  credentials: {
    password: string;
    confirmPassword: string;
  };
  addresses: Array<{
    street: string;
    city: string;
    zipCode: string;
    isPrimary: boolean;
  }>;
  preferences: {
    newsletter: boolean;
    notifications: ("email" | "sms" | "push")[];
  };
}

// Custom validators
function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get("password");
  const confirmPassword = control.get("confirmPassword");

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    return { passwordMismatch: true };
  }
  return null;
}

function strongPasswordValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!value) return null;

  const hasUpperCase = /[A-Z]/.test(value);
  const hasLowerCase = /[a-z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  const hasSpecial = /[!@#$%^&*]/.test(value);

  const valid = hasUpperCase && hasLowerCase && hasNumber && hasSpecial;

  return valid ? null : {
    strongPassword: {
      hasUpperCase,
      hasLowerCase,
      hasNumber,
      hasSpecial,
    },
  };
}

@Component({
  selector: "app-registration-form",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: \`
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <!-- Personal Info -->
      <fieldset formGroupName="personalInfo">
        <legend>Personal Information</legend>

        <div class="form-field">
          <label for="firstName">First Name</label>
          <input id="firstName" formControlName="firstName" />
          @if (getError('personalInfo.firstName', 'required')) {
            <span class="error">First name is required</span>
          }
        </div>

        <div class="form-field">
          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email" />
          @if (getError('personalInfo.email', 'email')) {
            <span class="error">Invalid email format</span>
          }
        </div>
      </fieldset>

      <!-- Credentials -->
      <fieldset formGroupName="credentials">
        <legend>Credentials</legend>

        <div class="form-field">
          <label for="password">Password</label>
          <input id="password" type="password" formControlName="password" />
          @if (getError('credentials.password', 'strongPassword')) {
            <span class="error">Password must contain uppercase, lowercase, number, and special character</span>
          }
        </div>

        <div class="form-field">
          <label for="confirmPassword">Confirm Password</label>
          <input id="confirmPassword" type="password" formControlName="confirmPassword" />
        </div>

        @if (form.get('credentials')?.hasError('passwordMismatch')) {
          <span class="error">Passwords do not match</span>
        }
      </fieldset>

      <!-- Addresses (FormArray) -->
      <fieldset>
        <legend>Addresses</legend>
        <div formArrayName="addresses">
          @for (address of addresses.controls; track $index; let i = $index) {
            <div [formGroupName]="i" class="address-group">
              <input formControlName="street" placeholder="Street" />
              <input formControlName="city" placeholder="City" />
              <input formControlName="zipCode" placeholder="Zip Code" />
              <label>
                <input type="checkbox" formControlName="isPrimary" />
                Primary
              </label>
              <button type="button" (click)="removeAddress(i)">Remove</button>
            </div>
          }
        </div>
        <button type="button" (click)="addAddress()">Add Address</button>
      </fieldset>

      <button type="submit" [disabled]="form.invalid">Register</button>

      <pre>{{ form.value | json }}</pre>
    </form>
  \`,
})
export class RegistrationFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      personalInfo: this.fb.group({
        firstName: ["", [Validators.required, Validators.minLength(2)]],
        lastName: ["", [Validators.required]],
        email: ["", [Validators.required, Validators.email]],
      }),
      credentials: this.fb.group(
        {
          password: ["", [Validators.required, Validators.minLength(8), strongPasswordValidator]],
          confirmPassword: ["", [Validators.required]],
        },
        { validators: passwordMatchValidator }
      ),
      addresses: this.fb.array([this.createAddressGroup()]),
      preferences: this.fb.group({
        newsletter: [false],
        notifications: [["email"]],
      }),
    });
  }

  get addresses(): FormArray {
    return this.form.get("addresses") as FormArray;
  }

  createAddressGroup(): FormGroup {
    return this.fb.group({
      street: ["", Validators.required],
      city: ["", Validators.required],
      zipCode: ["", [Validators.required, Validators.pattern(/^\\d{5}$/)]],
      isPrimary: [false],
    });
  }

  addAddress(): void {
    this.addresses.push(this.createAddressGroup());
  }

  removeAddress(index: number): void {
    this.addresses.removeAt(index);
  }

  getError(path: string, error: string): boolean {
    const control = this.form.get(path);
    return control ? control.hasError(error) && control.touched : false;
  }

  onSubmit(): void {
    if (this.form.valid) {
      const formValue: RegistrationForm = this.form.value;
      console.log("Form submitted:", formValue);
    } else {
      this.form.markAllAsTouched();
    }
  }
}`,
        runCommand: "ng generate component registration-form",
      },
      {
        slug: "signals",
        title: "Signals",
        description:
          "Type-safe Angular Signals for reactive state management with computed values and effects.",
        code: `// counter.component.ts - Basic signals
import { Component, signal, computed, effect } from "@angular/core";

@Component({
  selector: "app-counter",
  standalone: true,
  template: \`
    <div>
      <h2>Count: {{ count() }}</h2>
      <h3>Doubled: {{ doubledCount() }}</h3>
      <p>{{ message() }}</p>

      <button (click)="increment()">+</button>
      <button (click)="decrement()">-</button>
      <button (click)="reset()">Reset</button>
    </div>
  \`,
})
export class CounterComponent {
  // Writable signal with initial value
  count = signal(0);

  // Computed signal (derived state)
  doubledCount = computed(() => this.count() * 2);

  message = computed(() => {
    const c = this.count();
    if (c === 0) return "Start counting!";
    if (c > 10) return "That's a lot!";
    if (c < 0) return "Going negative?";
    return \`Current count: \${c}\`;
  });

  constructor() {
    // Effect runs whenever signals it reads change
    effect(() => {
      console.log(\`Count changed to: \${this.count()}\`);
      // Side effects: logging, localStorage, etc.
      localStorage.setItem("count", this.count().toString());
    });
  }

  increment() {
    this.count.update((c) => c + 1);
  }

  decrement() {
    this.count.update((c) => c - 1);
  }

  reset() {
    this.count.set(0);
  }
}

// user-store.ts - State management with signals
import { Injectable, signal, computed } from "@angular/core";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserState {
  users: User[];
  selectedUserId: number | null;
  loading: boolean;
  error: string | null;
}

@Injectable({
  providedIn: "root",
})
export class UserStore {
  // Private writable state
  private state = signal<UserState>({
    users: [],
    selectedUserId: null,
    loading: false,
    error: null,
  });

  // Public readonly selectors (computed signals)
  readonly users = computed(() => this.state().users);
  readonly loading = computed(() => this.state().loading);
  readonly error = computed(() => this.state().error);

  readonly selectedUser = computed(() => {
    const state = this.state();
    return state.users.find((u) => u.id === state.selectedUserId) ?? null;
  });

  readonly userCount = computed(() => this.state().users.length);

  readonly adminUsers = computed(() =>
    this.state().users.filter((u) => u.email.includes("admin"))
  );

  // Actions
  setLoading(loading: boolean) {
    this.state.update((s) => ({ ...s, loading }));
  }

  setError(error: string | null) {
    this.state.update((s) => ({ ...s, error, loading: false }));
  }

  setUsers(users: User[]) {
    this.state.update((s) => ({ ...s, users, loading: false, error: null }));
  }

  addUser(user: User) {
    this.state.update((s) => ({
      ...s,
      users: [...s.users, user],
    }));
  }

  updateUser(id: number, updates: Partial<User>) {
    this.state.update((s) => ({
      ...s,
      users: s.users.map((u) => (u.id === id ? { ...u, ...updates } : u)),
    }));
  }

  removeUser(id: number) {
    this.state.update((s) => ({
      ...s,
      users: s.users.filter((u) => u.id !== id),
      selectedUserId: s.selectedUserId === id ? null : s.selectedUserId,
    }));
  }

  selectUser(id: number | null) {
    this.state.update((s) => ({ ...s, selectedUserId: id }));
  }
}

// user-list.component.ts - Using the store
@Component({
  selector: "app-user-list",
  standalone: true,
  template: \`
    @if (store.loading()) {
      <p>Loading...</p>
    }

    @if (store.error()) {
      <p class="error">{{ store.error() }}</p>
    }

    <p>Total users: {{ store.userCount() }}</p>

    <ul>
      @for (user of store.users(); track user.id) {
        <li
          [class.selected]="store.selectedUser()?.id === user.id"
          (click)="store.selectUser(user.id)"
        >
          {{ user.name }} ({{ user.email }})
        </li>
      }
    </ul>

    @if (store.selectedUser(); as user) {
      <div class="details">
        <h3>Selected: {{ user.name }}</h3>
        <p>{{ user.email }}</p>
      </div>
    }
  \`,
})
export class UserListComponent {
  constructor(public store: UserStore) {}
}`,
        runCommand: "ng new my-app --strict",
      },
    ],
  },
  {
    slug: "express",
    title: "Express",
    description: "Create web servers and APIs with Express.js and TypeScript. Learn routing, middleware, error handling, and building RESTful services.",
    docsUrl: "https://expressjs.com/en/guide/routing.html",
    examples: [
      {
        slug: "typed-routes",
        title: "Typed Routes",
        description:
          "Type-safe Express routes with properly typed request parameters, body, and response.",
        code: `import express, {
  Request,
  Response,
  NextFunction,
  Router,
  RequestHandler,
} from "express";

// Type definitions
interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
  createdAt: Date;
}

// Typed request interfaces
interface TypedRequestBody<T> extends Request {
  body: T;
}

interface TypedRequestParams<T extends Record<string, string>> extends Request {
  params: T;
}

interface TypedRequestQuery<T> extends Request {
  query: T;
}

// Combined typed request
interface TypedRequest<
  TParams extends Record<string, string> = Record<string, string>,
  TBody = unknown,
  TQuery = unknown
> extends Request {
  params: TParams;
  body: TBody;
  query: TQuery;
}

// Response type helper
type TypedResponse<T> = Response<T>;

// DTO types
interface CreateUserDto {
  name: string;
  email: string;
  role?: "admin" | "user";
}

interface UpdateUserDto {
  name?: string;
  email?: string;
  role?: "admin" | "user";
}

interface UserParams {
  id: string;
}

interface UserQuery {
  page?: string;
  limit?: string;
  role?: "admin" | "user";
}

// In-memory database
const users: User[] = [];
let nextId = 1;

// Typed route handlers
const getUsers: RequestHandler<
  Record<string, string>,
  User[],
  unknown,
  UserQuery
> = (req, res) => {
  const { page = "1", limit = "10", role } = req.query;
  let result = users;

  if (role) {
    result = result.filter((u) => u.role === role);
  }

  const start = (parseInt(page) - 1) * parseInt(limit);
  const end = start + parseInt(limit);

  res.json(result.slice(start, end));
};

const getUserById: RequestHandler<UserParams, User | { error: string }> = (
  req,
  res
) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));

  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  res.json(user);
};

const createUser: RequestHandler<
  Record<string, string>,
  User | { error: string },
  CreateUserDto
> = (req, res) => {
  const { name, email, role = "user" } = req.body;

  // Validation
  if (!name || !email) {
    res.status(400).json({ error: "Name and email are required" });
    return;
  }

  const newUser: User = {
    id: nextId++,
    name,
    email,
    role,
    createdAt: new Date(),
  };

  users.push(newUser);
  res.status(201).json(newUser);
};

const updateUser: RequestHandler<
  UserParams,
  User | { error: string },
  UpdateUserDto
> = (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === id);

  if (userIndex === -1) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  users[userIndex] = { ...users[userIndex], ...req.body };
  res.json(users[userIndex]);
};

const deleteUser: RequestHandler<UserParams, void | { error: string }> = (
  req,
  res
) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === id);

  if (userIndex === -1) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  users.splice(userIndex, 1);
  res.status(204).send();
};

// Router setup
const router = Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

// App setup
const app = express();
app.use(express.json());
app.use("/api/users", router);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

export { app, router };`,
        runCommand: "npm install express @types/express",
      },
      {
        slug: "middleware",
        title: "Middleware",
        description:
          "Type-safe Express middleware for authentication, validation, error handling, and logging.",
        code: `import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { z, ZodSchema } from "zod";

// Extend Express Request type
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
        role: "admin" | "user";
      };
      requestId?: string;
    }
  }
}

// Custom error class
class AppError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public isOperational = true
  ) {
    super(message);
    Object.setPrototypeOf(this, AppError.prototype);
  }
}

// Request ID middleware
const requestIdMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  req.requestId = \`req_\${Date.now()}_\${Math.random().toString(36).slice(2)}\`;
  res.setHeader("X-Request-ID", req.requestId);
  next();
};

// Logger middleware
const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(
      \`[\${req.requestId}] \${req.method} \${req.path} \${res.statusCode} - \${duration}ms\`
    );
  });

  next();
};

// Authentication middleware
const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    res.status(401).json({ error: "No token provided" });
    return;
  }

  try {
    // Verify token (simplified - use JWT in production)
    const decoded = JSON.parse(Buffer.from(token, "base64").toString());
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
};

// Role-based authorization middleware factory
const requireRole = (...roles: Array<"admin" | "user">) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user) {
      res.status(401).json({ error: "Not authenticated" });
      return;
    }

    if (!roles.includes(req.user.role)) {
      res.status(403).json({ error: "Insufficient permissions" });
      return;
    }

    next();
  };
};

// Validation middleware factory using Zod
const validate = <T extends ZodSchema>(schema: T, source: "body" | "query" | "params" = "body") => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req[source]);

    if (!result.success) {
      res.status(400).json({
        error: "Validation failed",
        details: result.error.errors.map((e) => ({
          path: e.path.join("."),
          message: e.message,
        })),
      });
      return;
    }

    req[source] = result.data;
    next();
  };
};

// Rate limiting middleware
const rateLimit = (maxRequests: number, windowMs: number) => {
  const requests = new Map<string, { count: number; resetTime: number }>();

  return (req: Request, res: Response, next: NextFunction): void => {
    const ip = req.ip || "unknown";
    const now = Date.now();
    const record = requests.get(ip);

    if (!record || now > record.resetTime) {
      requests.set(ip, { count: 1, resetTime: now + windowMs });
      next();
      return;
    }

    if (record.count >= maxRequests) {
      res.status(429).json({
        error: "Too many requests",
        retryAfter: Math.ceil((record.resetTime - now) / 1000),
      });
      return;
    }

    record.count++;
    next();
  };
};

// Async handler wrapper
const asyncHandler = <T>(
  fn: (req: Request, res: Response, next: NextFunction) => Promise<T>
) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

// Global error handler
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(\`[\${req.requestId}] Error:\`, err);

  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      error: err.message,
      ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
    });
    return;
  }

  res.status(500).json({
    error: "Internal server error",
    ...(process.env.NODE_ENV === "development" && {
      message: err.message,
      stack: err.stack,
    }),
  });
};

// Usage example
const UserSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

// app.use(requestIdMiddleware);
// app.use(loggerMiddleware);
// app.use(rateLimit(100, 60000));
// app.post("/users", authMiddleware, requireRole("admin"), validate(UserSchema), createUser);
// app.use(errorHandler);

export {
  AppError,
  requestIdMiddleware,
  loggerMiddleware,
  authMiddleware,
  requireRole,
  validate,
  rateLimit,
  asyncHandler,
  errorHandler,
};`,
        runCommand: "npm install express zod @types/express",
      },
      {
        slug: "controllers",
        title: "Controllers & Services",
        description:
          "Clean architecture with typed controllers, services, and repository patterns in Express.",
        code: `// types/user.ts
export interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  role: "admin" | "user";
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserInput {
  name: string;
  email: string;
  password: string;
  role?: "admin" | "user";
}

export interface UpdateUserInput {
  name?: string;
  email?: string;
  role?: "admin" | "user";
}

// repositories/user.repository.ts
export interface IUserRepository {
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(data: Omit<User, "id" | "createdAt" | "updatedAt">): Promise<User>;
  update(id: string, data: Partial<User>): Promise<User | null>;
  delete(id: string): Promise<boolean>;
}

class UserRepository implements IUserRepository {
  private users: User[] = [];

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async findById(id: string): Promise<User | null> {
    return this.users.find((u) => u.id === id) || null;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find((u) => u.email === email) || null;
  }

  async create(data: Omit<User, "id" | "createdAt" | "updatedAt">): Promise<User> {
    const user: User = {
      ...data,
      id: \`user_\${Date.now()}\`,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.push(user);
    return user;
  }

  async update(id: string, data: Partial<User>): Promise<User | null> {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) return null;

    this.users[index] = {
      ...this.users[index],
      ...data,
      updatedAt: new Date(),
    };
    return this.users[index];
  }

  async delete(id: string): Promise<boolean> {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) return false;

    this.users.splice(index, 1);
    return true;
  }
}

// services/user.service.ts
import bcrypt from "bcrypt";

class UserService {
  constructor(private userRepository: IUserRepository) {}

  async getAllUsers(): Promise<Omit<User, "passwordHash">[]> {
    const users = await this.userRepository.findAll();
    return users.map(({ passwordHash, ...user }) => user);
  }

  async getUserById(id: string): Promise<Omit<User, "passwordHash"> | null> {
    const user = await this.userRepository.findById(id);
    if (!user) return null;

    const { passwordHash, ...userData } = user;
    return userData;
  }

  async createUser(input: CreateUserInput): Promise<Omit<User, "passwordHash">> {
    // Check if email already exists
    const existingUser = await this.userRepository.findByEmail(input.email);
    if (existingUser) {
      throw new Error("Email already in use");
    }

    // Hash password
    const passwordHash = await bcrypt.hash(input.password, 10);

    const user = await this.userRepository.create({
      name: input.name,
      email: input.email,
      passwordHash,
      role: input.role || "user",
    });

    const { passwordHash: _, ...userData } = user;
    return userData;
  }

  async updateUser(
    id: string,
    input: UpdateUserInput
  ): Promise<Omit<User, "passwordHash"> | null> {
    const user = await this.userRepository.update(id, input);
    if (!user) return null;

    const { passwordHash, ...userData } = user;
    return userData;
  }

  async deleteUser(id: string): Promise<boolean> {
    return this.userRepository.delete(id);
  }
}

// controllers/user.controller.ts
import { Request, Response, NextFunction } from "express";

class UserController {
  constructor(private userService: UserService) {}

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.userService.getAllUsers();
      res.json(users);
    } catch (error) {
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.userService.getUserById(req.params.id);

      if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
      }

      res.json(user);
    } catch (error) {
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      if (error instanceof Error && error.message === "Email already in use") {
        res.status(409).json({ error: error.message });
        return;
      }
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.userService.updateUser(req.params.id, req.body);

      if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
      }

      res.json(user);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deleted = await this.userService.deleteUser(req.params.id);

      if (!deleted) {
        res.status(404).json({ error: "User not found" });
        return;
      }

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };
}

// Dependency injection setup
const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

export { userController, userService, userRepository };`,
        runCommand: "npm install express bcrypt @types/express @types/bcrypt",
      },
    ],
  },
  {
    slug: "nestjs",
    title: "NestJS",
    description: "Build scalable server-side applications with NestJS, a progressive Node.js framework. Learn modules, controllers, providers, and decorators.",
    docsUrl: "https://docs.nestjs.com/",
    examples: [
      {
        slug: "modules",
        title: "Modules & Controllers",
        description:
          "Type-safe NestJS modules, controllers, and dependency injection with decorators.",
        code: `// user.entity.ts
export class User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
  createdAt: Date;
  updatedAt: Date;
}

// dto/create-user.dto.ts
import { IsString, IsEmail, IsEnum, IsOptional, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsOptional()
  @IsEnum(["admin", "user"])
  role?: "admin" | "user";
}

// dto/update-user.dto.ts
import { PartialType } from "@nestjs/mapped-types";

export class UpdateUserDto extends PartialType(CreateUserDto) {}

// dto/query-user.dto.ts
import { IsOptional, IsInt, Min, Max, IsEnum } from "class-validator";
import { Type } from "class-transformer";

export class QueryUserDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number = 10;

  @IsOptional()
  @IsEnum(["admin", "user"])
  role?: "admin" | "user";

  @IsOptional()
  @IsString()
  search?: string;
}

// user.service.ts
import { Injectable, NotFoundException, ConflictException } from "@nestjs/common";

@Injectable()
export class UserService {
  private users: User[] = [];
  private nextId = 1;

  async findAll(query: QueryUserDto): Promise<{ data: User[]; total: number }> {
    let result = this.users;

    if (query.role) {
      result = result.filter((u) => u.role === query.role);
    }

    if (query.search) {
      const search = query.search.toLowerCase();
      result = result.filter(
        (u) =>
          u.name.toLowerCase().includes(search) ||
          u.email.toLowerCase().includes(search)
      );
    }

    const total = result.length;
    const start = (query.page! - 1) * query.limit!;
    const data = result.slice(start, start + query.limit!);

    return { data, total };
  }

  async findOne(id: number): Promise<User> {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException(\`User with ID \${id} not found\`);
    }
    return user;
  }

  async create(dto: CreateUserDto): Promise<User> {
    const existingUser = this.users.find((u) => u.email === dto.email);
    if (existingUser) {
      throw new ConflictException("Email already in use");
    }

    const user: User = {
      id: this.nextId++,
      name: dto.name,
      email: dto.email,
      role: dto.role || "user",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.users.push(user);
    return user;
  }

  async update(id: number, dto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);

    if (dto.email && dto.email !== user.email) {
      const existingUser = this.users.find((u) => u.email === dto.email);
      if (existingUser) {
        throw new ConflictException("Email already in use");
      }
    }

    Object.assign(user, dto, { updatedAt: new Date() });
    return user;
  }

  async remove(id: number): Promise<void> {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) {
      throw new NotFoundException(\`User with ID \${id} not found\`);
    }
    this.users.splice(index, 1);
  }
}

// user.controller.ts
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from "@nestjs/common";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(@Query() query: QueryUserDto) {
    return this.userService.findAll(query);
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @Patch(":id")
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() dto: UpdateUserDto
  ) {
    return this.userService.update(id, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param("id", ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}

// user.module.ts
import { Module } from "@nestjs/common";

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}`,
        runCommand: "npx @nestjs/cli new my-app",
      },
      {
        slug: "guards-interceptors",
        title: "Guards & Interceptors",
        description:
          "Type-safe NestJS guards for authentication/authorization and interceptors for logging/transformation.",
        code: `// decorators/current-user.decorator.ts
import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export interface CurrentUser {
  id: number;
  email: string;
  role: "admin" | "user";
}

export const CurrentUser = createParamDecorator(
  (data: keyof CurrentUser | undefined, ctx: ExecutionContext): CurrentUser | unknown => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user as CurrentUser;

    return data ? user?.[data] : user;
  }
);

// decorators/roles.decorator.ts
import { SetMetadata } from "@nestjs/common";

export type Role = "admin" | "user";
export const ROLES_KEY = "roles";
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);

// guards/jwt-auth.guard.ts
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractToken(request);

    if (!token) {
      throw new UnauthorizedException("No token provided");
    }

    try {
      const payload = await this.jwtService.verifyAsync(token);
      request.user = {
        id: payload.sub,
        email: payload.email,
        role: payload.role,
      };
      return true;
    } catch {
      throw new UnauthorizedException("Invalid token");
    }
  }

  private extractToken(request: Request): string | undefined {
    const authHeader = request.headers["authorization"];
    if (!authHeader) return undefined;

    const [type, token] = authHeader.split(" ");
    return type === "Bearer" ? token : undefined;
  }
}

// guards/roles.guard.ts
import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Role, ROLES_KEY } from "../decorators/roles.decorator";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.includes(user.role);
  }
}

// interceptors/logging.interceptor.ts
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request = context.switchToHttp().getRequest();
    const { method, url } = request;
    const now = Date.now();

    return next.handle().pipe(
      tap(() => {
        const response = context.switchToHttp().getResponse();
        const { statusCode } = response;
        const duration = Date.now() - now;

        this.logger.log(\`\${method} \${url} \${statusCode} - \${duration}ms\`);
      })
    );
  }
}

// interceptors/transform.interceptor.ts
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface ApiResponse<T> {
  data: T;
  meta: {
    timestamp: string;
    path: string;
  };
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, ApiResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<ApiResponse<T>> {
    const request = context.switchToHttp().getRequest();

    return next.handle().pipe(
      map((data) => ({
        data,
        meta: {
          timestamp: new Date().toISOString(),
          path: request.url,
        },
      }))
    );
  }
}

// interceptors/cache.interceptor.ts
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class CacheInterceptor implements NestInterceptor {
  private cache = new Map<string, { data: unknown; expiry: number }>();

  constructor(private ttl: number = 60000) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request = context.switchToHttp().getRequest();

    if (request.method !== "GET") {
      return next.handle();
    }

    const key = request.url;
    const cached = this.cache.get(key);

    if (cached && cached.expiry > Date.now()) {
      return of(cached.data);
    }

    return next.handle().pipe(
      tap((data) => {
        this.cache.set(key, {
          data,
          expiry: Date.now() + this.ttl,
        });
      })
    );
  }
}

// Usage in controller
@Controller("users")
@UseGuards(JwtAuthGuard, RolesGuard)
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class UserController {
  @Get("profile")
  getProfile(@CurrentUser() user: CurrentUser) {
    return user;
  }

  @Get("admin")
  @Roles("admin")
  getAdminData() {
    return { secret: "admin only data" };
  }
}`,
        runCommand: "npm install @nestjs/jwt @nestjs/passport class-validator class-transformer",
      },
      {
        slug: "pipes-filters",
        title: "Pipes & Exception Filters",
        description:
          "Custom validation pipes and exception filters for robust error handling in NestJS.",
        code: `// pipes/validation.pipe.ts
import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from "@nestjs/common";
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";

@Injectable()
export class ValidationPipe implements PipeTransform<unknown> {
  async transform(value: unknown, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    const object = plainToInstance(metatype, value);
    const errors = await validate(object);

    if (errors.length > 0) {
      const messages = errors.map((error) => ({
        property: error.property,
        constraints: error.constraints,
      }));

      throw new BadRequestException({
        message: "Validation failed",
        errors: messages,
      });
    }

    return object;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}

// pipes/parse-uuid.pipe.ts
import {
  PipeTransform,
  Injectable,
  BadRequestException,
} from "@nestjs/common";

@Injectable()
export class ParseUUIDPipe implements PipeTransform<string> {
  private readonly uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  transform(value: string): string {
    if (!this.uuidRegex.test(value)) {
      throw new BadRequestException(\`"\${value}" is not a valid UUID\`);
    }
    return value;
  }
}

// pipes/file-validation.pipe.ts
import { PipeTransform, Injectable, BadRequestException } from "@nestjs/common";

interface FileValidationOptions {
  maxSize?: number;
  allowedMimeTypes?: string[];
}

@Injectable()
export class FileValidationPipe implements PipeTransform {
  constructor(private options: FileValidationOptions = {}) {}

  transform(file: Express.Multer.File): Express.Multer.File {
    if (!file) {
      throw new BadRequestException("File is required");
    }

    const { maxSize = 5 * 1024 * 1024, allowedMimeTypes } = this.options;

    if (file.size > maxSize) {
      throw new BadRequestException(
        \`File size exceeds maximum allowed size of \${maxSize / 1024 / 1024}MB\`
      );
    }

    if (allowedMimeTypes && !allowedMimeTypes.includes(file.mimetype)) {
      throw new BadRequestException(
        \`File type \${file.mimetype} is not allowed. Allowed types: \${allowedMimeTypes.join(", ")}\`
      );
    }

    return file;
  }
}

// filters/http-exception.filter.ts
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from "@nestjs/common";
import { Request, Response } from "express";

interface ErrorResponse {
  statusCode: number;
  message: string | string[];
  error: string;
  timestamp: string;
  path: string;
  requestId?: string;
}

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    const errorResponse: ErrorResponse = {
      statusCode: status,
      message:
        typeof exceptionResponse === "object" && "message" in exceptionResponse
          ? (exceptionResponse as Record<string, unknown>).message as string | string[]
          : exception.message,
      error: HttpStatus[status] || "Error",
      timestamp: new Date().toISOString(),
      path: request.url,
      requestId: request.headers["x-request-id"] as string,
    };

    this.logger.error(
      \`\${request.method} \${request.url} \${status} - \${JSON.stringify(errorResponse.message)}\`
    );

    response.status(status).json(errorResponse);
  }
}

// filters/all-exceptions.filter.ts
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  Logger,
} from "@nestjs/common";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof Error && "getStatus" in exception
        ? (exception as { getStatus: () => number }).getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof Error
        ? exception.message
        : "Internal server error";

    this.logger.error(
      \`Unhandled exception: \${message}\`,
      exception instanceof Error ? exception.stack : undefined
    );

    response.status(status).json({
      statusCode: status,
      message: process.env.NODE_ENV === "production"
        ? "Internal server error"
        : message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}

// Usage in main.ts
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global pipes
  app.useGlobalPipes(new ValidationPipe());

  // Global filters
  app.useGlobalFilters(
    new AllExceptionsFilter(),
    new HttpExceptionFilter()
  );

  await app.listen(3000);
}
bootstrap();`,
        runCommand: "npm install class-validator class-transformer",
      },
      {
        slug: "testing",
        title: "Testing",
        description:
          "Type-safe unit and integration testing in NestJS with Jest and proper mocking.",
        code: `// user.service.spec.ts
import { Test, TestingModule } from "@nestjs/testing";
import { NotFoundException, ConflictException } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserRepository } from "./user.repository";
import { CreateUserDto } from "./dto/create-user.dto";

// Mock types
type MockUserRepository = {
  [K in keyof UserRepository]: jest.Mock;
};

const createMockRepository = (): MockUserRepository => ({
  findAll: jest.fn(),
  findOne: jest.fn(),
  findByEmail: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
});

describe("UserService", () => {
  let service: UserService;
  let repository: MockUserRepository;

  const mockUser = {
    id: 1,
    name: "Test User",
    email: "test@example.com",
    role: "user" as const,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: UserRepository,
          useValue: createMockRepository(),
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    repository = module.get(UserRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("findOne", () => {
    it("should return a user if found", async () => {
      repository.findOne.mockResolvedValue(mockUser);

      const result = await service.findOne(1);

      expect(result).toEqual(mockUser);
      expect(repository.findOne).toHaveBeenCalledWith(1);
    });

    it("should throw NotFoundException if user not found", async () => {
      repository.findOne.mockResolvedValue(null);

      await expect(service.findOne(999)).rejects.toThrow(NotFoundException);
    });
  });

  describe("create", () => {
    const createDto: CreateUserDto = {
      name: "New User",
      email: "new@example.com",
      password: "password123",
    };

    it("should create a new user", async () => {
      repository.findByEmail.mockResolvedValue(null);
      repository.create.mockResolvedValue({ id: 2, ...createDto, role: "user" });

      const result = await service.create(createDto);

      expect(result).toHaveProperty("id");
      expect(repository.create).toHaveBeenCalled();
    });

    it("should throw ConflictException if email exists", async () => {
      repository.findByEmail.mockResolvedValue(mockUser);

      await expect(service.create(createDto)).rejects.toThrow(ConflictException);
    });
  });

  describe("update", () => {
    it("should update an existing user", async () => {
      repository.findOne.mockResolvedValue(mockUser);
      repository.update.mockResolvedValue({ ...mockUser, name: "Updated" });

      const result = await service.update(1, { name: "Updated" });

      expect(result.name).toBe("Updated");
    });
  });

  describe("delete", () => {
    it("should delete an existing user", async () => {
      repository.findOne.mockResolvedValue(mockUser);
      repository.delete.mockResolvedValue(undefined);

      await expect(service.delete(1)).resolves.not.toThrow();
    });
  });
});

// user.controller.spec.ts
import { Test, TestingModule } from "@nestjs/testing";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

describe("UserController", () => {
  let controller: UserController;
  let service: jest.Mocked<UserService>;

  const mockUserService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: mockUserService,
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get(UserService);
  });

  describe("findAll", () => {
    it("should return array of users", async () => {
      const mockUsers = [{ id: 1, name: "User 1" }];
      service.findAll.mockResolvedValue({ data: mockUsers, total: 1 });

      const result = await controller.findAll({ page: 1, limit: 10 });

      expect(result.data).toEqual(mockUsers);
    });
  });
});

// app.e2e-spec.ts - Integration test
import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "../src/app.module";

describe("UserController (e2e)", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe("/users (POST)", () => {
    it("should create a user", () => {
      return request(app.getHttpServer())
        .post("/users")
        .send({
          name: "Test User",
          email: "test@example.com",
          password: "password123",
        })
        .expect(201)
        .expect((res) => {
          expect(res.body).toHaveProperty("id");
          expect(res.body.email).toBe("test@example.com");
        });
    });

    it("should return 400 for invalid data", () => {
      return request(app.getHttpServer())
        .post("/users")
        .send({ name: "" })
        .expect(400);
    });
  });

  describe("/users (GET)", () => {
    it("should return users list", () => {
      return request(app.getHttpServer())
        .get("/users")
        .expect(200)
        .expect((res) => {
          expect(Array.isArray(res.body.data)).toBe(true);
        });
    });
  });
});`,
        runCommand: "npm install --save-dev @nestjs/testing jest @types/jest supertest",
      },
    ],
  },
];

// Helper function to get all examples for navigation
export function getAllExamples(): { category: string; categorySlug: string; examples: { slug: string; title: string }[] }[] {
  return categories.map((cat) => ({
    category: cat.title,
    categorySlug: cat.slug,
    examples: cat.examples.map((ex) => ({
      slug: ex.slug,
      title: ex.title,
    })),
  }));
}

// Helper function to get a specific example
export function getExample(categorySlug: string, exampleSlug: string): Example | undefined {
  const category = categories.find((c) => c.slug === categorySlug);
  return category?.examples.find((e) => e.slug === exampleSlug);
}

// Helper function to get a category
export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
