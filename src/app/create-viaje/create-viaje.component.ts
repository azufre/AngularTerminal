import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../_service/alert.service';
import { ViajeService } from '../_service/viaje.service';
import { AuthenticationService } from '../_service/auth.service';
import {Viaje} from '../_model/viaje';

@Component({templateUrl: 'create-viaje.component.html'})
export class CreateBusComponent implements OnInit {
    createViajeForm: FormGroup;
    loading = false;
    submitted = false;
    chooseViajes: Viaje[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private viajeService: ViajeService,
        private alertService: AlertService
    ) { 
        // redirect to home if already logged in
        if (!this.authenticationService.currentUserValue) { 
            this.router.navigate(['/login']);
        }
    }

    ngOnInit() {
        this.createViajeForm = this.formBuilder.group({
          Ciudad: ['', Validators.required],
          HoraSalida: ['', Validators.required],
          HoraEntrada: ['', Validators.required],
          Costo: ['', Validators.required],
          IdBus: ['', Validators.required],
        });

        this.viajeService.getAll().pipe().subscribe(q => {
          this.chooseViajes = q;
        });

    }

    // convenience getter for easy access to form fields
    get f() { return this.createViajeForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.createViajeForm.invalid) {
            return;
        }

        this.loading = true;
        this.viajeService.Create(this.createViajeForm.value)
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