<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="keywords" content="Laravel porto" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel Porto</title>
    <!-- Vendor Css -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
            font-family: "Poppins", sans-serif;
            font-size: 100%;
            line-height: 1.6;
        }
        body {
            -webkit-font-smoothing: antialiased;
            -webkit-text-size-adjust: none;
            width: 100%!important;
            height: 100%;
        }
        a {
            color: #348eda;
        }
        h1, h2, h3 {
            font-family: "Poppins", sans-serif;
            line-height: 1.1;
            margin-bottom: 15px;
            color: #000;
            margin: 40px 0 10px;
            line-height: 1.2;
            font-weight: 200;
        }
        h1 {
            font-size: 36px;
        }
        h2 {
            font-size: 28px;
        }
        h3 {
            font-size: 22px;
        }
        p, ul, ol {
            margin-bottom: 10px;
            font-weight: normal;
            font-size: 14px;
        }
        ul li, ol li {
            margin-left: 5px;
            list-style-position: inside;
        }
        .container {
            display: block!important;
            max-width: 600px!important;
            margin: 0 auto!important; /* makes it centered */
            clear: both!important;
        }
        .row {
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            margin-right: -15px;
            margin-left: -15px;
        }
        .col-sm-6  {
            padding-left: 15px;
            padding-right: 15px;
        }
        table {
            border-collapse: collapse;
        }
        .table {
            width: 100%;
            margin-bottom: 1rem;
            background-color: transparent;
        }
        .table td, .table th {
            padding: 0.75rem;
            vertical-align: top;
            border-top: 1px solid #dee2e6;
        }
        .table-bordered {
            border: 1px solid #dee2e6;
        }
        .mb-3 {
            margin-bottom: 1.5rem;
        }
        .mb-4 {
            margin-bottom: 2rem;
        }
        .mb-5 {
            margin-bottom: 2.5rem;
        }
        .text-center {
            text-align: center;
        }
        .pt-5 {
            padding-top: 2.5rem;
        }
        @media (min-width: 576px) {
            .col-sm-6 {
                flex: 0 0 50%;
                max-width: 50%;
            }
        }
    </style>
    
</head>
<body>
    <div class="container pt-5 mt-2">
        <h2 class="text-center font-weight-bolder">Invoice</h2>
        <hr class="mb-4">
        <p>Invoice Date: {{ $order->created_at }}</p>
        <p>Order Id: {{ $order->id }}</p>

        <div class="row">
            <div class="col-sm-6">
                <h4 class="mb-4">From</h4>
                <p>
                    {{ $user->first_name }} {{ $user->last_name }} <br />
                    {{ $user->billing_address_1 }}, {{ $user->billing_state }}, {{ $user->billing_country }} <br />
                    Phone: {{ $user->billing_phone }}
                </p>
            </div>
            <div class="col-sm-6">
                <h4 class="mb-4">To</h4>
                <p>
                    {{ $order->billing_first_name }} {{ $order->billing_last_name }} <br />
                    {{ $order->billing_street_1 }}, {{ $order->billing_state }}, {{ $order->billing_country }} <br />
                    Phone: {{ $order->billing_phone }}
                </p>
            </div>
        </div>
        <hr class="mb-5">
        <h5 class="mb-3">Purchased Items</h5>            
        <table class="table table-bordered mb-5">
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                @foreach($order->items as $item)
                <tr>
                    <td>{{ $item->name }}</td>
                    <td>{{ $item->qty }}</td>
                    <td>{{ $item->gross_revenue }}</td>
                </tr>
                @endforeach
            </tbody>
        </table>

        <h5 class="mb-3">General order info</h5>   
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Info</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Payment Method</td>
                    <td>{{ $order->payment_method }}</td>
                </tr>
                <tr>
                    <td>Shipping Method</td>
                    <td>{{ $order->shipping_method }}  <strong>${{ $order->shipping_cost }}</strong></td>
                </tr>
                <tr>
                    <td>Refund</td>
                    <td>{{ $order->order_refunded_price }}</td>
                </tr>
                @foreach($order->coupons as $coupon)
                    <tr>
                        <td>Coupon <strong>{{ $coupon->coupon_code }}<strong></td>
                        <td>{{ $coupon->coupon_amount }}</td>
                    </tr>
                @endforeach
                <tr>
                    <td>Tax</td>
                    <td>{{ $order->order_tax }}</td>
                </tr>
                <tr>
                    <td><strong>Grant Total</strong></td>
                    <td>${{ $order->order_total_price }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</body>

</html>
