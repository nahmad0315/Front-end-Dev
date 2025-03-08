// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     const body = await req.json(); // ✅ Ensure request body is parsed
//     console.log("Received user data:", body); // Debugging

//     if (!body.firstName || !body.email) {
//       return NextResponse.json(
//         { error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     // Simulate saving to a database
//     return NextResponse.json(
//       { message: "User added successfully", user: body },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error in /api/users:", error);
//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }

// // import { NextResponse } from "next/server";

// // // Mock database (for now)
// // let users = []; // This will store users in memory (reset on server restart)

// // // Handle POST request (Add a new user)
// // export async function POST(req) {
// //   try {
// //     const body = await req.json();
// //     console.log("Received user data:", body);

// //     if (!body.firstName || !body.email) {
// //       return NextResponse.json(
// //         { error: "Missing required fields" },
// //         { status: 400 }
// //       );
// //     }

// //     users.push(body); // Simulating database storage

// //     return NextResponse.json(
// //       { message: "User added successfully", user: body },
// //       { status: 201 }
// //     );
// //   } catch (error) {
// //     console.error("Error in /api/users:", error);
// //     return NextResponse.json(
// //       { error: "Internal Server Error" },
// //       { status: 500 }
// //     );
// //   }
// // }

// // // Handle GET request (Fetch all users)
// // export async function GET() {
// //   try {
// //     return NextResponse.json({ users }, { status: 200 });
// //   } catch (error) {
// //     console.error("Error fetching users:", error);
// //     return NextResponse.json(
// //       { error: "Internal Server Error" },
// //       { status: 500 }
// //     );
// //   }
// // }

import { NextResponse } from "next/server";

// Handle POST request (Add a new user)
export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Received user data:", body);

    if (!body.firstName || !body.email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Simulating database storage (for now, not returning users)
    return NextResponse.json(
      { message: "User added successfully", user: body },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in /api/users:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
