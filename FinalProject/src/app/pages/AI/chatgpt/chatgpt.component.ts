import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ChatActions } from '../../../States/Actions/chat.action';
import { selectBotReplies, selectMessages } from '../../../States/Selectors/chat.selector';
import { ChatState } from '../../../States/Reducers/chat.reducer';


@Component({
  selector: 'app-chatgpt',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './chatgpt.component.html',
  styleUrl: './chatgpt.component.css'
})
export class ChatgptComponent {

  userInput: string = '';
  messages$: Observable<any[]>;
  botReplies$: Observable<any[]>;

  showHistory: boolean = false;

  constructor(private store: Store<{ chat: ChatState }>) {
    this.messages$ = store.select(selectMessages);
    this.botReplies$ = store.select(selectBotReplies);
    this.store.dispatch(ChatActions.loadMessages());
  }

  sendMessage() {
    if (this.userInput.trim()) {
      this.store.dispatch(ChatActions.sendMessage({ message: this.userInput }));
      this.userInput = '';
    }
  }

  toggleHistory() {
    this.showHistory = !this.showHistory;
  }

  deleteMessage(message: any) {  // Explicitly type 'message'
    this.store.dispatch(ChatActions.deleteMessage({ messageId: message.id }));
  }


}
