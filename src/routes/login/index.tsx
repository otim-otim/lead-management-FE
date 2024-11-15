import { useState, FormEvent, ChangeEvent } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { axiosAdapter } from '../../axiosAdapter';
import { useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/login/')({
    component: RouteComponent,
});

export default function RouteComponent() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate()

    function handleEmailChange(e: ChangeEvent<HTMLInputElement>): void {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e: ChangeEvent<HTMLInputElement>): void {
        setPassword(e.target.value);
    }

    async function login(e: FormEvent): Promise<void> {
        e.preventDefault(); // Prevents page refresh on form submit

        try {
            // First, retrieve the CSRF token
            await axiosAdapter.get('/sanctum/csrf-cookie');

            // Now make the login request
            const {data, status,error} = await axiosAdapter.post<{ token: string }>('api/login', {
                email,
                password,
            });

            if(status !== 200) {
                throw new Error(error);
            }
            const user = data.user;
            localStorage.setItem('currentUser', JSON.stringify(user));
            navigate({ to: '/' });
            
        } catch (error: any) {
            console.error('Login failed:', error);
            // Handle login error (e.g., show an error message)
        }
    }

    return (
        <Form onSubmit={login}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={handleEmailChange}
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={handlePasswordChange}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}
