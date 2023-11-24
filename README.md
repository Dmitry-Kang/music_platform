# Musical Full-Stack Application

Welcome to the Musical Full-Stack Application! This web application allows users to listen to music, leave comments, and upload their own music. The server is built using Nest.js with TypeScript, and the database is hosted on the cloud using MongoDB. The client-side is developed using Next.js with React.

## Features

- **Music Playback:** Enjoy a seamless music listening experience with the ability to play, pause, skip, and control the volume.

- **Comments Section:** Share your thoughts and connect with other music enthusiasts by leaving comments on your favorite tracks.

- **Music Upload:** Contribute to the community by uploading your own music tracks and sharing them with fellow users.

## Technologies Used

- **Server:**
  - Nest.js
  - TypeScript
  - MongoDB (Cloud-based)

- **Client:**
  - Next.js
  - TypeScript
  - React

## Getting Started

### Prerequisites

- Node.js installed on your system.
- MongoDB Atlas account for cloud-based database hosting.

### Server Setup

1. Clone the repository:

```bash
git clone https://github.com/Dmitry-Kang/music_platform.git
cd music_platform
```

2. Install dependencies:

```bash
npm install
```

3. Configure the MongoDB connection in the `server/src/config/database.config.ts` file.

4. Run the server:

```bash
npm run start
```

### Client Setup

1. Navigate to the client directory:

```bash
cd ../client
```

2. Install dependencies:

```bash
npm install
```

3. Start the client:

```bash
npm run dev
```

4. Visit `http://localhost:3000` in your browser to access the Musical Full-Stack Application.

## Usage

1. Explore the available music tracks on the home page.
2. Click on a track to play or pause the music.
3. Leave comments on tracks to share your thoughts.
4. Upload your own music by navigating to the upload section.
5. Enjoy the vibrant community of music lovers!

## Contribution

Contributions are welcome! If you have ideas for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Happy listening! 🎶🎧
