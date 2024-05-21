import { NextResponse, NextRequest } from 'next/server'
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib';

export async function GET(request: Request) { 


    await prisma.user.deleteMany();


    const user = await prisma.user.create({
        data: {
            email: 'admin@innovacode.online',
            password: bcrypt.hashSync('Admin123'),
            name: 'Innova Code',
            image: 'https://lh3.googleusercontent.com/a/AAcHTtfNj1wKEavkDynCql_1qI9opNtoUTDJr1uOfHYtbCCCmw=s96-c',
        }
    })
    return NextResponse.json({
        user
    })
}