import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server = 'http://localhost:53421/';
    public ApiUrl = '';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}