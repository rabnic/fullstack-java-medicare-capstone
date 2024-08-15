import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { LoginComponent } from './pages/login/login.component';
import { ManageProductsComponent } from './pages/manage-products/manage-products.component';
import { OrderConfirmationComponent } from './pages/order-confirmation/order-confirmation.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'admin-profile',
        component: AdminProfileComponent,
    },
    {
        path: 'cart',
        component: CartComponent,
    },
    {
        path: 'checkout',
        component: CheckoutComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'manage-products',
        component: ManageProductsComponent,
    },
    {
        path: 'order-confirmation',
        component: OrderConfirmationComponent,
    },
    {
        path: 'product-detail/:id',
        component: ProductDetailComponent,
    },
];
