import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../_service/alert.service';
import { BusService } from '../_service/bus.service';
import { AuthenticationService } from '../_service/auth.service';

@Component({templateUrl: 'create-bus.component.html'})
export class CreateBusComponent implements OnInit {
    createBusForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private busService: BusService,
        private alertService: AlertService
    ) { 
        // redirect to home if already logged in
        if (!this.authenticationService.currentUserValue) { 
            this.router.navigate(['/login']);
        }
    }

    ngOnInit() {
        this.createBusForm = this.formBuilder.group({
          Placa: ['', Validators.required],
          CantidadAsientos: ['', Validators.required],
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.createBusForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.createBusForm.invalid) {
            return;
        }

        this.loading = true;
        this.busService.Create(this.createBusForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Bus was successful created', true);
                    this.router.navigate(['/home']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}