@extends('admin.layout')

@section('vendor-css')
@endsection

@section('sidebar')
    @include('admin.common.sidebar')
@endsection

@section('page-content')
    @include('admin.common.breadcrumb', ['current_page' => 'Customers', 'paths' => ['home' => '/dashboard', 'ecommerce' => '/ecommerce', 'reports' => '/ecommerce/reports']])

    <div class="row">
        <div class="col">
            <report-customer-component />
        </div>
    </div>
@endsection

