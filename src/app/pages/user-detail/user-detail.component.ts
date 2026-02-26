import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  template: `
    <div style="padding: 20px; border: 1px solid #ccc; border-radius: 8px;">
      <h2>Detalle del Usuario</h2>
      <p>Estás viendo el perfil del usuario con ID: <strong>{{ userId }}</strong></p>
    </div>
  `
})
export class UserDetailComponent implements OnInit {
  userId: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Leemos el parámetro 'id' de la URL de forma síncrona
    this.userId = this.route.snapshot.paramMap.get('id');
  }
}