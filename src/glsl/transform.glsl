// adapted from
// https://en.wikipedia.org/wiki/Conversion_between_quaternions_and_Euler_angles#Euler_Angles_to_Quaternion_Conversion
// https://github.com/mrdoob/three.js/blob/dev/src/math/Quaternion.js
vec4 quatFromRotation(vec3 rot) {
  vec4 quat;

  float c1 = cos(rot.x * 0.5);
  float c2 = cos(rot.y * 0.5);
  float c3 = cos(rot.z * 0.5);
  float s1 = sin(rot.x * 0.5);
  float s2 = sin(rot.y * 0.5);
  float s3 = sin(rot.z * 0.5);

  quat.x = s1 * c2 * c3 + c1 * s2 * s3;
  quat.y = c1 * s2 * c3 - s1 * c2 * s3;
  quat.z = c1 * c2 * s3 + s1 * s2 * c3;
  quat.w = c1 * c2 * c3 - s1 * s2 * s3;

  return quat;
}

vec3 transform(vec3 position, vec3 translation, vec3 rotation, vec3 scale ) {
  vec3 pos = vec3(position);
  //applies the scale
  pos *= scale;
  //computes the rotation
  // https://blog.molecular-matters.com/2013/05/24/a-faster-quaternion-vector-multiplication/
  vec4 quat = quatFromRotation(rotation);
  pos += 2.0 * cross( quat.xyz, cross( quat.xyz, pos ) + quat.w * pos );
  //translates
  pos += translation;
  //return the transformed position
  return pos;
}

vec3 transform(vec3 position, vec3 translation, vec3 rotation) {
  vec3 pos = vec3(position);
  vec4 quat = quatFromRotation(rotation);
  pos += 2.0 * cross( quat.xyz, cross( quat.xyz, pos ) + quat.w * pos );
  pos += translation;
  return pos;
}

#pragma glslify: export(transform)
