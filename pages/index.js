// pages/login.js
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please fill in both username and password');
    } else {
      setError('');
      // Here you would typically make an API call to your backend for authentication
      console.log('Login attempted with:', username, password);
      // For demo purposes, let's simulate a successful login
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating API call
      router.push('/dashboard'); // Redirect to dashboard after successful login
    }
  };

  const handleGoogleLogin = () => {
    // Here you would typically initiate the Google OAuth flow
    console.log('Google login initiated');
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
      <Image
        src="/background.jpg" // Replace with your actual background image path
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50" /> {/* Overlay for better readability */}
      <Card className="w-full max-w-md mx-4 z-10 bg-white bg-opacity-90">
        <CardHeader>
          <h2 className="text-2xl font-bold text-center">Login</h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
            />
            {error && (
              <div className="text-red-500 flex items-center text-sm">
                <AlertCircle className="mr-2" size={16} />
                {error}
              </div>
            )}
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Or</span>
            </div>
          </div>
          <Button onClick={handleGoogleLogin} className="w-full bg-red-500 hover:bg-red-600">
            Login with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
