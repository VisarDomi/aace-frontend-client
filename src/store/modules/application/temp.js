    // await context.dispatch(UPDATE_PROFILE).then(() => {
    //   context.dispatch(SEND_EDUCATIONS).then(() => {
    //     context.dispatch(SEND_EXPERIENCES).then(() => {
    //       context.dispatch(SEND_SKILLS).then(() => {
    //         context.commit(STOP_UPLOAD);
    //         let t1 = performance.now();
    //         console.log(
    //           "Call to Promise.all took " + (t1 - t0) + " milliseconds."
    //         );
    //         // vm.$router.push({ name: "SuccessApplication" });
    //       });
    //     });
    //   });
    // });
    //   const success = [];
    //   Promise.all([
    //     await context
    //       .dispatch(UPDATE_PROFILE)
    //       .then(() => success.push("updated_profile")),
    //     await context
    //       .dispatch(SEND_EDUCATIONS)
    //       .then(() => success.push("sent_educations")),
    //     await context
    //       .dispatch(SEND_EXPERIENCES)
    //       .then(() => success.push("sent_experiences")),
    //     await context
    //       .dispatch(SEND_SKILLS)
    //       .then(() => success.push("sent_skills"))
    //   ]).then(([res1, res2, res3, res4]) => {
    //     console.log("success is", success);
    //     console.log("reses are", res1, res2, res3, res4);
    //     context.commit(STOP_UPLOAD);
    //     let t1 = performance.now();
    //     console.log("Call to Promise.all took " + (t1 - t0) + " milliseconds.");
    //     console.log("payload.vm action", payload.vm);
    //     // vm.$router.push({ name: "SuccessApplication" });
    //   });