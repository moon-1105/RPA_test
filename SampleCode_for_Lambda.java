/**
from : 
https://docs.aws.amazon.com/ko_kr/sdk-for-java/v1/developer-guide/examples-lambda.html
**/
import com.amazonaws.auth.profile.ProfileCredentialsProvider;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.lambda.AWSLambda;
import com.amazonaws.services.lambda.AWSLambdaClientBuilder;
import com.amazonaws.services.lambda.model.InvokeRequest;
import com.amazonaws.services.lambda.model.InvokeResult;
import com.amazonaws.services.lambda.model.ServiceException;

import java.nio.charset.StandardCharsets;

String functionName = args[0];

//InvokeRequest => Lambda 함수에 전달할 함수 이름 및 페이로드 지정 
InvokeRequest invokeRequest = new InvokeRequest()
                .withFunctionName(functionName)  // => 함수이름 
                .withPayload("{\n" +
                        " \"Hello \": \"Paris\",\n" +
                        " \"countryCode\": \"FR\"\n" +
                        "}"); //=> 페이로드, 전달할 데이터(JSON 형식의 문자열을 지정; JSON 자체느 안되나??)

//결과init
InvokeResult invokeResult = null;

try {
    AWSLambda awsLambda = AWSLambdaClientBuilder.standard()
                  .withCredentials(new ProfileCredentialsProvider())
                  .withRegion(Regions.US_WEST_2).build();

     invokeResult = awsLambda.invoke(invokeRequest);

     String ans = new String(invokeResult.getPayload().array(), StandardCharsets.UTF_8);

     //write out the return value
      System.out.println(ans);

} catch (ServiceException e) {
   System.out.println(e);
}

System.out.println(invokeResult.getStatusCode());
        
