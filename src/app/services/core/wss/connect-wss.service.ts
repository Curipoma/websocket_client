import {Injectable} from '@angular/core';
import {AuthService} from '@services/auth';
import Echo from 'laravel-echo';
import {environment} from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class ConnectWssService {
  public echo!: Echo;

  constructor(private authService: AuthService) {
    this.connect();
  }

  disconnect(): void {
    this.echo.disconnect();
  }

  connect(): void {
    const token = localStorage.getItem('accessToken');
    this.echo = new Echo({
      broadcaster: environment.pusher.broadcaster,
      cluster: environment.pusher.cluster,
      key: environment.pusher.key,
      wsHost: environment.pusher.wsHost,
      authEndpoint: environment.pusher.authEndpoint,
      auth: {
        headers: {
          Authorization: `Bearer ${token?.replace(/"/g, '')}`,
          Accept: 'application/json',
        },
      },
      wsPort: environment.pusher.port,
      forceTLS: false,
      encrypted: false,
    });
  }
}
