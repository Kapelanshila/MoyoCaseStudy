import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { ClientPortalComponent } from './client-portal/client-portal.component';
import { clientAuthGuard } from './_helpers/client.auth.guard';
import { ReadOrdersComponent } from './Order/read-orders/read-orders.component';
import { CreateOrdersComponent } from './Order/create-orders/create-orders.component';
import { UpdateOrderComponent } from './Order/update-order/update-order.component';
import { vendorAuthGuard } from './_helpers/vendor.auth.guard';
import { CreateProductComponent } from './Product/create-product/create-product.component';
import { UpdateProductComponent } from './Product/update-product/update-product.component';
import { ReadProductComponent } from './Product/read-product/read-product.component';
import { VendorOrdersComponent } from './Order/vendor-orders/vendor-orders.component';

const routes: Routes = [{ path: 'login', component: LoginComponent},
{ path: 'client-portal', component: ClientPortalComponent, canActivate: [clientAuthGuard] },
{ path: 'client-orders', component: ReadOrdersComponent, canActivate: [clientAuthGuard] },
{ path: 'place-orders', component: CreateOrdersComponent, canActivate: [clientAuthGuard] },
{ path: 'update-orders', component: UpdateOrderComponent, canActivate: [clientAuthGuard] },
{ path: 'read-products', component: ReadProductComponent, canActivate: [vendorAuthGuard] },
{ path: 'create-product', component: CreateProductComponent, canActivate: [vendorAuthGuard] },
{ path: 'update-product', component: UpdateProductComponent, canActivate: [vendorAuthGuard] },
{ path: 'vendor-orders', component: VendorOrdersComponent, canActivate: [vendorAuthGuard] },
{path: '', redirectTo: 'login', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
