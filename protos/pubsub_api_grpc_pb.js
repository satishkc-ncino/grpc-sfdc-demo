// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Salesforce Pub/Sub API Version 1.
//
'use strict';
var grpc = require('grpc');
var protos_pubsub_api_pb = require('../protos/pubsub_api_pb.js');

function serialize_eventbus_v1_FetchRequest(arg) {
  if (!(arg instanceof protos_pubsub_api_pb.FetchRequest)) {
    throw new Error('Expected argument of type eventbus.v1.FetchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eventbus_v1_FetchRequest(buffer_arg) {
  return protos_pubsub_api_pb.FetchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_eventbus_v1_FetchResponse(arg) {
  if (!(arg instanceof protos_pubsub_api_pb.FetchResponse)) {
    throw new Error('Expected argument of type eventbus.v1.FetchResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eventbus_v1_FetchResponse(buffer_arg) {
  return protos_pubsub_api_pb.FetchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_eventbus_v1_PublishRequest(arg) {
  if (!(arg instanceof protos_pubsub_api_pb.PublishRequest)) {
    throw new Error('Expected argument of type eventbus.v1.PublishRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eventbus_v1_PublishRequest(buffer_arg) {
  return protos_pubsub_api_pb.PublishRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_eventbus_v1_PublishResponse(arg) {
  if (!(arg instanceof protos_pubsub_api_pb.PublishResponse)) {
    throw new Error('Expected argument of type eventbus.v1.PublishResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eventbus_v1_PublishResponse(buffer_arg) {
  return protos_pubsub_api_pb.PublishResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_eventbus_v1_SchemaInfo(arg) {
  if (!(arg instanceof protos_pubsub_api_pb.SchemaInfo)) {
    throw new Error('Expected argument of type eventbus.v1.SchemaInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eventbus_v1_SchemaInfo(buffer_arg) {
  return protos_pubsub_api_pb.SchemaInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_eventbus_v1_SchemaRequest(arg) {
  if (!(arg instanceof protos_pubsub_api_pb.SchemaRequest)) {
    throw new Error('Expected argument of type eventbus.v1.SchemaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eventbus_v1_SchemaRequest(buffer_arg) {
  return protos_pubsub_api_pb.SchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_eventbus_v1_TopicInfo(arg) {
  if (!(arg instanceof protos_pubsub_api_pb.TopicInfo)) {
    throw new Error('Expected argument of type eventbus.v1.TopicInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eventbus_v1_TopicInfo(buffer_arg) {
  return protos_pubsub_api_pb.TopicInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_eventbus_v1_TopicRequest(arg) {
  if (!(arg instanceof protos_pubsub_api_pb.TopicRequest)) {
    throw new Error('Expected argument of type eventbus.v1.TopicRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eventbus_v1_TopicRequest(buffer_arg) {
  return protos_pubsub_api_pb.TopicRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// The Pub/Sub API provides a single interface for publishing and subscribing 
// to platform events, including real-time event monitoring events, and change 
// data capture events. The Pub/Sub API is a gRPC API that is based on HTTP 2.
//
// A session token is needed to authenticate. Any of the Salesforce supported 
// OAuth flows can be used to obtain a session token: 
// https://help.salesforce.com/articleView?id=sf.remoteaccess_oauth_flows.htm&type=5
//
// For each RPC, a client needs to pass authentication information as metadata 
// headers (https://www.grpc.io/docs/guides/concepts/#metadata) 
// with each method call.
//
// For SFDC session token authentication, use:
//   x-sfdc-api-session-token : SFDC session token
//   x-sfdc-instance-url : Salesforce instance URL
//   x-sfdc-tenant-id : tenant id of the client
//
// StatusException is thrown in case of response failure for every kind of 
// request.
var PubSubService = exports.PubSubService = {
  //
// Bidirectional streaming RPC to subscribe to a Topic. The subscription is 
// pull-based. A client can request for more events as it consumes events. 
// This enables a client to handle flow control.
//
// Typical flow:
// 1. Client requests for X number of events via FetchRequest.
// 2. Server receives request and delivers events until X events are delivered 
//    to client via one ore more FetchResponse messages.
// 3. Client consumes the FetchResponse messages as they come.
// 4. Client issues new FetchRequest for Y more number of events. This request 
//    can come before the server has delivered the earlier requested X number 
//    of events so the client gets a continuous stream of events if any.
//
// If a client requests for more events before the server finishes the last
// requested amount, the server will append the new amount to the current 
// amount of events it still needs to fetch and deliver.
//
// A client can subscribe at any position in the stream by providing a replay 
// option in the first FetchRequest. The replay option is honored for the 
// first FetchRequest received from a client. Any subsequent FetchRequests 
// with a new replay option are ignored. A client needs to call the Subscribe 
// RPC again to restart the subscription at a new position in the stream.
//
// The first FetchRequest of the stream identifies the topic to subscribe to.
// If any subsequent FetchRequest provides topic_name, it must match what
// was provided in the first FetchRequest; otherwise the RPC will error
// with INVALID_ARGUMENT status.
subscribe: {
    path: '/eventbus.v1.PubSub/Subscribe',
    requestStream: true,
    responseStream: true,
    requestType: protos_pubsub_api_pb.FetchRequest,
    responseType: protos_pubsub_api_pb.FetchResponse,
    requestSerialize: serialize_eventbus_v1_FetchRequest,
    requestDeserialize: deserialize_eventbus_v1_FetchRequest,
    responseSerialize: serialize_eventbus_v1_FetchResponse,
    responseDeserialize: deserialize_eventbus_v1_FetchResponse,
  },
  // Get Event Schema for topic based on Schema Id.
getSchema: {
    path: '/eventbus.v1.PubSub/GetSchema',
    requestStream: false,
    responseStream: false,
    requestType: protos_pubsub_api_pb.SchemaRequest,
    responseType: protos_pubsub_api_pb.SchemaInfo,
    requestSerialize: serialize_eventbus_v1_SchemaRequest,
    requestDeserialize: deserialize_eventbus_v1_SchemaRequest,
    responseSerialize: serialize_eventbus_v1_SchemaInfo,
    responseDeserialize: deserialize_eventbus_v1_SchemaInfo,
  },
  //
// Get the Topic Information related to topic.
getTopic: {
    path: '/eventbus.v1.PubSub/GetTopic',
    requestStream: false,
    responseStream: false,
    requestType: protos_pubsub_api_pb.TopicRequest,
    responseType: protos_pubsub_api_pb.TopicInfo,
    requestSerialize: serialize_eventbus_v1_TopicRequest,
    requestDeserialize: deserialize_eventbus_v1_TopicRequest,
    responseSerialize: serialize_eventbus_v1_TopicInfo,
    responseDeserialize: deserialize_eventbus_v1_TopicInfo,
  },
  //
// Send publish request to synchronously publish events to topic.
publish: {
    path: '/eventbus.v1.PubSub/Publish',
    requestStream: false,
    responseStream: false,
    requestType: protos_pubsub_api_pb.PublishRequest,
    responseType: protos_pubsub_api_pb.PublishResponse,
    requestSerialize: serialize_eventbus_v1_PublishRequest,
    requestDeserialize: deserialize_eventbus_v1_PublishRequest,
    responseSerialize: serialize_eventbus_v1_PublishResponse,
    responseDeserialize: deserialize_eventbus_v1_PublishResponse,
  },
  //
// Bidirectional Streaming RPC to publish events to the Event Bus. 
// PublishRequest contains the batch of events to publish.
//
// The first PublishRequest of the stream identifies the topic to publish on.
// If any subsequent PublishRequest provides topic_name, it must match what
// was provided in the first PublishRequest; otherwise, the RPC will error
// with INVALID_ARGUMENT status.
//
// The server will return a PublishResponse for each PublishRequest when 
// publish is complete for the batch. A client does not have to wait for a 
// PublishResponse before sending a new PublishRequest, i.e. multiple publish 
// batches can be queued up, which allows for higher publish rate as a client 
// can asynchronously publish more events while publishes are still in flight 
// on the server side.
//
// PublishResponse holds a PublishResult for each event published that 
// indicates success or failure of the publish. A client can then retry the 
// publish as needed before sending more PublishRequests for new events to 
// publish.
//
// A client must send a valid publish request with one or more events every 70 
// seconds to hold on to the stream. Otherwise, the server closes the stream 
// and notifies the client. Once the client is notified of the stream closure,
// it must make a new PublishStream call to resume publishing.
//
publishStream: {
    path: '/eventbus.v1.PubSub/PublishStream',
    requestStream: true,
    responseStream: true,
    requestType: protos_pubsub_api_pb.PublishRequest,
    responseType: protos_pubsub_api_pb.PublishResponse,
    requestSerialize: serialize_eventbus_v1_PublishRequest,
    requestDeserialize: deserialize_eventbus_v1_PublishRequest,
    responseSerialize: serialize_eventbus_v1_PublishResponse,
    responseDeserialize: deserialize_eventbus_v1_PublishResponse,
  },
};

exports.PubSubClient = grpc.makeGenericClientConstructor(PubSubService);
