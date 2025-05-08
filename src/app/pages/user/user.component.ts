import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly userService: UserService
  ) {}

  nome: string = '';
  email: string = '';

  emailTemp: string = '';

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => (this.emailTemp = params['email'])
    );
    this.userService.coletarUser(this.emailTemp).subscribe({
      next: (elem) => {
        this.nome = elem.nome;
        this.email = elem.email;
      },
      error: () => {
        console.error('Deu error');
      },
    });
  }

  navigate() {
    this.router.navigate(['']);
  }
}
