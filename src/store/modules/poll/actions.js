import { PollService } from "../../services/api";
import {
  FETCH_POLLS,
  FETCH_POLL,
  FETCH_POLL_COMMENTS,
  MAKE_POLL_COMMENT,
  MAKE_POLL_VOTE
} from "../../actions.type";
import {
  SET_POLL,
  SET_POLLS,
  SET_POLL_COMMENTS,
  SET_POLL_COMMENT
} from "../../mutations.type";

export const actions = {
  async [MAKE_POLL_VOTE](context, payload){
    const { pollId, options } = payload;
    console.log("payload of poll vote: -> ", {options});
    await PollService.postVote(pollId, {options}).then((res)=>{
      if(res.status==200){
        console.log("voting succeeded.");

      }
    }); 
  }, 
  async [FETCH_POLLS](context) {
    const { data } = await PollService.getPolls();
    console.log("polls ", data);
    context.commit(SET_POLLS, data);
    console.log("context.state.polls", context.state.polls);
  },
  async [FETCH_POLL](context, payload) {
    console.log("FETCH_POLL, payload:", payload);
    const { id } = payload;
    console.log("FETCH_POLL, id:", id);
    const { data } = await PollService.getPoll(id);
    context.commit(SET_POLL, data);
    console.log("context.state.poll", context.state.poll);
  },
  async [FETCH_POLL_COMMENTS](context, payload) {
    const { id } = payload;
    console.log("FETCH_COMMENTS", id);
    const { data } = await PollService.getComments(id);
    context.commit(SET_POLL_COMMENTS, data);
  },
  async [MAKE_POLL_COMMENT](context, payload) {
    const { pollId, body, files } = payload;
    console.log("starting make comment calls");
    console.log("pollId", pollId);
    console.log("body", body);
    console.log("files", files);
    await PollService.postComment(pollId, {
      body: body
    });
  }
};
