import { LockClosedIcon } from '@heroicons/react/solid';
import {useState, useEffect} from 'react';
import { useRouter } from 'next/router'

let users = [
    {
        username: 'tp',
        password: '123',
        type: 'tp',
    },
    {
        username: 've',
        password: '123',
        type: 've'
    },
    {
        username: 'ic',
        password: '123',
        type: 'ic'
    },
    {
        username: 'cl',
        password: '123',
        type: 'cl'
    },
    {
        username: 'su',
        password: '123',
        type: 'su'
    },
]

export default function Login() {
    let [form, setForm] = useState({username: '', password: ''})
    let router = useRouter();

    function handleChange(e, type) {
        let value = e.target.value;
        switch(type) {
            case 'username': 
                setForm((prev) => ({
                    ...prev,
                    username: value
                }))
                break;
            case 'password': 
                setForm((prev) => ({
                    ...prev,
                    password: value
                }))
                break;
            default:
                break;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        let {username, password} = form;
        users.map(user => {
            if (user.username === username && user.password === password) {
                router.push(`users/${user.type}/profile`);
                // localStorage.setItem('isLoggedIn', true);
            }
            return user;
        })
    }


    return (
        <>
        <div className="min-h-screen w-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
            <form className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                <div>
                    <input
                    onChange={(e) => handleChange(e,'username')}
                    name="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Username"
                    />
                </div>
                <div>
                    <input
                    onChange={(e) => handleChange(e,'password')}
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    />
                </div>
                </div>

                <div>
                <button
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={handleSubmit}
                >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                    </span>
                    Sign in
                </button>
                </div>
            </form>
            </div>
        </div>
        </>
    )
}
