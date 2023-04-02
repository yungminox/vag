import {Component, OnInit} from '@angular/core';
import {QueueService} from "../../queue.service";
import {PollClientSubscribeResponse} from "../../poll/poll-client-subscribe-response";

interface CounterClientSubscribeResponse {
  interaction : string;
}

@Component({
  selector: 'app-counter-presenter',
  templateUrl: './counter-presenter.component.html',
  styleUrls: ['./counter-presenter.component.css']
})
export class CounterPresenterComponent implements OnInit {
  counter: number = 0;

  constructor(private queueService: QueueService) {}

  ngOnInit(): void {
    this.queueService.onClientEvent<CounterClientSubscribeResponse>(counterSubscriptionEvent => {
      if(counterSubscriptionEvent.interaction && counterSubscriptionEvent.interaction === "counter"){
        this.counter++;
      }
    });
  }

}
