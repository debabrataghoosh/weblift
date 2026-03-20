import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const PLAN_AMOUNTS: Record<string, number> = {
  Starter: 4000,
  Business: 8000,
  Premium: 15000
};

export async function POST(request: Request) {
  try {
    const { plan } = (await request.json()) as { plan?: string };

    if (!plan || !PLAN_AMOUNTS[plan]) {
      return NextResponse.json({ error: 'Invalid plan selected.' }, { status: 400 });
    }

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return NextResponse.json(
        { error: 'Razorpay keys are missing. Add RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET to environment variables.' },
        { status: 500 }
      );
    }

    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret
    });

    const order = await razorpay.orders.create({
      amount: PLAN_AMOUNTS[plan] * 100,
      currency: 'INR',
      receipt: `weblift_${plan.toLowerCase()}_${Date.now()}`,
      notes: {
        plan,
        source: 'weblift_pricing'
      }
    });

    return NextResponse.json({
      keyId,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      plan
    });
  } catch (error) {
    console.error('Razorpay order creation failed:', error);
    return NextResponse.json({ error: 'Unable to create payment order. Please try again.' }, { status: 500 });
  }
}
